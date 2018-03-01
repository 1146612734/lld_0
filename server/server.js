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
const bodyParser = require('body-parser')
const session = require('express-session')

const isDev=process.env.NODE_ENV==='development'

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(favicon(path.join(__dirname,'../favicon.ico')))

app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'tid',
  resave: false,
  saveUninitialized: false,
  secret: 'react cnode class'
}))

app.use('/api/user', require('./util/handle-login'))
app.use('/api', require('./util/proxy'))

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
