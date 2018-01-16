const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require("clean-webpack-plugin");
const isDev=process.env.NODE_ENV==='development';
const config = {
	devtool: 'eval-source-map',
	entry: {
		app: path.join(__dirname, '../client/app.js')
	},
	output: {
		filename: "[name].[hash].js",
		path: path.join(__dirname, "../dist"),
		publicPath: "/public/",                 //静态资源引用的路径,可以直接写CDN域名的路径 public/[name].[hash].js
		 ///“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。	
	},
	/*devServer: {
		contentBase: "../dist",
		historyApiFallback: true,
		inline: true, //实时刷新
		hot: true,
		openPage: "index.html" //指定打开浏览器时要导航的页面
	},*/
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
	},
	plugins: [
		new webpack.BannerPlugin('版权所有，翻版必究'),
		new HtmlWebpackPlugin({
			template:path.join(__dirname,"../client/template.html")
		})
	]
}


if(isDev){
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
		contentBase:path.join(__dirname, '../dist'),
		//inline:true,
		hot:true,
		overlay:{//webpack编译有任何错误，就在网页显示个黑色浮层，显示错误信息
			errors:true  //只显示错误信息。不包括warning信息
		},
		//historyApiFallback:true
		historyApiFallback:{
			index:'/public/index.html'
		}
	}
	config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports=config