import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = (env, argv) => {
	return {
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: './public/index.html'
			})
		],

		entry: {
			App: './app/App.tsx'
		},

		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
		},

		devServer: {
			compress: true,
			historyApiFallback: true
		},

		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					exclude: /node_modules/,
					use: [
						'babel-loader'
					]
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						'file-loader'
					]
				},
				{
					test: /\.svg$/,
					use:  ['svg-inline-loader']
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.less$/,
					use: [{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader'
						},
						{
							loader: 'less-loader',
							options: {
								javascriptEnabled: true
							}
						}
					]
				}
			]
		}
	}
}
