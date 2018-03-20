const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge=require('webpack-merge')
const baseconfig=require('./webpack.base')
const isDev=process.env.NODE_ENV==='development';
const config = webpackMerge(baseconfig, {
  devtool: 'eval-source-map',
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: "[name].[hash].js",
    ///“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
  },
 /*devServer: {
  contentBase: "../dist",
  historyApiFallback: true,
  inline: true, //实时刷新
  hot: true,
  openPage: "index.html" //指定打开浏览器时要导航的页面
 },*/

  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template:path.join(__dirname,"../client/template.html")
    }),
    new HtmlWebpackPlugin({
      template: '!!ejs-compiled-loader!'+ path.join(__dirname, '../client/server.template.ejs'),
      filename: 'server.ejs'
    })
  ]
})


if(isDev){
  config.devtool='#cheap-module-eval-source-map'
  config.entry={
    app:[
      'react-hot-loader/patch',
      path.join(__dirname,'../client/app.js')
    ]
  }
  config.devServer={
    host:'0.0.0.0',  //最合适
    port:'8888',
    publicPath:'/public/',
    //contentBase:path.join(__dirname, '../dist'),
    //inline:true,
    hot:true,
    overlay:{//webpack编译有任何错误，就在网页显示个黑色浮层，显示错误信息
     errors:true  //只显示错误信息。不包括warning信息
    },
    //historyApiFallback:true
    historyApiFallback:{
     index:'/public/index.html'
    },
    proxy:{
      '/api':'http://localhost:3333'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports=config
