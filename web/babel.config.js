module.exports = (api) => {

	api.cache(false)

	const presets = [
		[
			'@babel/preset-env', {
				'targets': {
					'node': 'current'
				}
			}
		],
		'@babel/preset-typescript',
		'@babel/preset-react'
	]

	const plugins = [
		'@babel/plugin-transform-runtime',
		'@babel/plugin-syntax-function-bind',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-throw-expressions',
//		["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }],
	]

	const ignore = []

	return {
		presets,
		plugins,
		ignore
	}

}