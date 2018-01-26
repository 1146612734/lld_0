/**
 *
 * @authors lld (you@example.org)
 * @date    2018-01-11 12:23:42
 * @version $Id$
 */
const express =require('express')
const ReactSSR=require('react-dom/server')
const fs=require("fs")
const path=require("path")
const favicon=require('serve-favicon')

const isDev=process.env.NODE_ENV==='development'

const app=express()
app.use(favicon(path.join(__dirname,'../favicon.ico')))

if(!isDev){
 const serverEntry=require('../dist/server-entry').default
 const template =fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8')
 app.use('/public',express.static(path.join(__dirname,'../dist')))//返回静态文件
 app.get('*',function(req,res){
  const appString=ReactSSR.renderToString(serverEntry)

  res.send(template.replace('<!-- app -->',appString))
 })
}else{
 const devStatic=require('./util/dev-static')
 devStatic(app)
}
var Server=app.listen(3333,function(){
 console.log('server is listening on 3333')
 // let host=Server.address().host
 // let port=Server.address().port
 // console.log('server is listening on http://%s:%s',host, port)  //http:////undefined:3333  ???

})
