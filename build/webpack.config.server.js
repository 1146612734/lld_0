const path = require('path')
const webpack = require('webpack')
const webpackMerge=require('webpack-merge')
const baseconfig=require('./webpack.base')

module.exports = webpackMerge(baseconfig, {
 target: 'node', //打包后使用的执行环境
 entry: {
  app: path.join(__dirname, '../client/server-entry.js')
 },
 externals: Object.keys(require('../package.json').dependencies),
 output: {
  filename: "server-entry.js",
  libraryTarget: "commonjs2"
 },
 plugins: [
  new webpack.DefinePlugin({
    'process.env.API_BASE': '"http://127.0.0.1:3333"'
  })
 ]
})
