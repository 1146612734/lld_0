/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-31 11:40:50
 * @version $Id$
 */
const path = require('path')

module.exports = {
	entry: {
		app: path.join(__dirname, '../client/app.js')
	},
	output: {
		filename: '[name].[hash].js',
		path: path.join(__dirname, '../dist'),
		publicPath: '/public'
	},
	module: {
		rules: [{
			test: /.jsx$/,
			loader: 'babel-loader'
		}]
	}
}