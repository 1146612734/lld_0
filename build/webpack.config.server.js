const path = require('path');

module.exports = {
	target: 'node', //打包后使用的执行环境
	entry: {
		app: path.join(__dirname, '../client/server-entry.js')
	},
	output: {
		filename: "server-entry.js",
		publicPath: "/public/", //静态资源引用的路径,可以直接写CDN域名的路径 public/[name].[hash].js
		path: path.join(__dirname, "../dist"),
		libraryTarget: "commonjs2"
	},
	module: {
		rules: [{
			test: /\.jsx$/,
			loader: 'babel-loader'
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: [
				path.join(__dirname, '../node_modules')
			]
		}]
	}
}