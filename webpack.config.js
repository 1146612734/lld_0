var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js", ///“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./public",
		historyApiFallback: true,
		inline: true //实时刷新
	},
	module: {
		rules: [{
			test: /(\.jsx|\.js)$/,
			use: {
				loader: "babel-loader",
				options: {
					presets: [
						"env", "react"
					]
				}
			},
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			use: [{ //这里对同一个文件引入多个loader的方法
				loader: "style-loader"
			}, {
				loader: "css-loader",
				options: {
					modules: true, //指定启用css modules
					localIndentName: '[name]__[local]--[hash:base64:5]' //指定css的类名格式
				}
			}, {
				loader: "postcss-loader"
			}]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"
		})
	]
}