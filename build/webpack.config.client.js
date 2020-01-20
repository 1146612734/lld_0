const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const base = require('./webpack.base.js')
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name][hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public'
  },

  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
}

if (isDev) {
  // config.entry = {
  //   app: [
  //     'react-hot-loader/patch',
  //     path.join(__dirname, '../client/app.js')
  //   ]
  // }
  config.devServer = {
    host: '0.0.0.0',  // 如果写localhost 或者0.0.0.1  局域网调试的时候连不上
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = webpackMerge(base, config)
