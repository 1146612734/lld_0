/**
 *
 * @authors lld (you@example.org)
 * @date    2018-01-16 17:17:25
 * @version $Id$
 */
const axios=require('axios')  //http请求的工具 api去github上看
const webpack=require('webpack')
const path=require('path')
const MemoryFs=require('memory-fs')  //memory-fs内存里读写文件，更快;fs硬盘上读写文件
const ReactDomServer=require('react-dom/server')
const asyncBootstrap=require('react-async-bootstrapper').default
const proxy=require('http-proxy-middleware') //做代理的
const ejs=require('ejs')
const serialize=require('serialize-javascript')

const serverConfig=require('../../build/webpack.config.server')

const getTemplate=() => {
	return new Promise((resolve,reject) => {
		axios.get('http://localhost:8888/public/server.ejs')
			.then(res => {
				resolve(res.data)
			})
			.catch(reject)
	})
}

const Module=module.constructor
const mfs=new MemoryFs()
const serverCompiler=webpack(serverConfig)
serverCompiler.outputFileSystem=mfs  //webpack的配置项，指定mfs,以前它用fs读写的文件，现在都用mfs读写，加快了速度
let serverBundle, createStoreMap
serverCompiler.watch({},(err,stats) => {
	if(err) throw err
	stats=stats.toJson()
	stats.errors.forEach(err => console.error(err))
	stats.warnings.forEach(warn => console.log(warn))
	const bundlePath=path.join(
		serverConfig.output.path,
		serverConfig.output.filename
	)

	const bundle=mfs.readFileSync(bundlePath,'utf-8')  //string类型
	const m=new Module()
	m._compile(bundle,'server-entry.js')  //将bundle string转换成一个模块,必须制定文件名称
	serverBundle=m.exports.default
  createStoreMap=m.exports.createStoreMap
})

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName]=stores[storeName].toJson()
    return result
  }, {})
}

module.exports=function(app){
	//所有访问/public开头的请求，都代理到http://localhost:8888
	app.use('/public',proxy({
		target:'http://localhost:8888'
	}))
	app.get("*",function(req,res){
		getTemplate().then(template => {
      const routerContext={}
      const stores = createStoreMap()
      const app=serverBundle(stores, routerContext, req.url)

			asyncBootstrap(app).then(() => {
        if(routerContext.url){
          res.status(302).setHeader('Location', routerContext.url)
          res.end()
          return
        }
        console.log(stores.appState.count)
        const state = getStoreState(stores)
        const content=ReactDomServer.renderToString(app)
        const html=ejs.render(template, {
          appString: content,
          initialState: serialize(state),
        })
        res.send(html)
        //res.send(template.replace('<!-- app -->',content))
      })

		})
	})
}
