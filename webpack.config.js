var webpack = require('webpack');
const path = require('path');
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
	}
}