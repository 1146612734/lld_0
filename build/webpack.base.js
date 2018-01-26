/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-23 21:19:01
 * @version $Id$
 */
const path=require("path")
module.exports= {
  output:{
    path: path.join(__dirname, "../dist"),
    publicPath: "/public/",                 //静态资源引用的路径,可以直接写CDN域名的路径 public/[name].[hash].js
  },
  module: {
    rules: [{
      enforce:'pre',
      test:/\.(js|jsx)$/,
      loader:'eslint-loader',
      exclude:[
        path.resolve(__dirname,'../node_modules')
      ]
    },{
      test: /\.jsx$/,
      loader: 'babel-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: [
        path.join(__dirname, '../node_modules')
      ]
    }]
  },
}
