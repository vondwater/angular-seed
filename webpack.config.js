var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('mini-css-extract-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");
const systemjsInterop = require("systemjs-webpack-interop/webpack-config");


module.exports = systemjsInterop.modifyWebpackConfig({
	mode: 'development',
	entry: {
	 	'root-application': 'app/single-spa-application.js'
	},
	output: {
		libraryTarget: 'system',
		publicPath: 'dist',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: [path.resolve(__dirname, 'node_modules')],
			loader: 'babel-loader',
		}],
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
		new SystemJSPublicPathWebpackPlugin(),
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['dist']
		}),
		new HtmlWebpackPlugin({
			template: './app/index.html',
			inject: 'body'
		}),
	],
	devtool: 'source-map',
	externals: [],
	devServer: {
		contentBase: path.join(__dirname, 'app'),
		historyApiFallback: true,
		liveReload: true
	}
});

systemjsInterop.checkWebpackConfig(module.exports);