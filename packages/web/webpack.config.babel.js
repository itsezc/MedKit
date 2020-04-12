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
					test: /\.(woff(2)?|ttf|eot)$/,
					use: [
						'file-loader'
					]
				},
				{
					test: /\.svg$/,
					use:  ['svg-inline-loader']
				  }
			]
		}
	}
}
