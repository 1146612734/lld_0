const ejs=require('ejs')
const asyncBootstrap=require('react-async-bootstrapper').default
const serialize=require('serialize-javascript')
const ReactDomServer=require('react-dom/server')
const Helmet = require('react-helmet').default  //SEO友好标签

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName]=stores[storeName].toJson()
    return result
  }, {})
}

module.exports = (bundle, template, req, res) => {
  return new Promise((bundle, template, req, res) => {
    const createStoreMap=bundle.createStoreMap
    const createApp=bundle.default

    const routerContext={}
    const stores = createStoreMap()
    const app=createApp(stores, routerContext, req.url)

    asyncBootstrap(app).then(() => {
      if(routerContext.url){
        res.status(302).setHeader('Location', routerContext.url)
        res.end()
        return
      }
      const helmet = Helmet.rewind()

      const state = getStoreState(stores)
      const content=ReactDomServer.renderToString(app)
      const html=ejs.render(template, {
        appString: content,
        initialState: serialize(state),
        meta: helmet.meta.toString(),
        title: helmet.title.toString(),
        style: helmet.style.toString(),
        link: helmet.link.toString(),
      })
      res.send(html)
      resolve()
      //res.send(template.replace('<!-- app -->',content))
    }).catch(reject)
  })
}
