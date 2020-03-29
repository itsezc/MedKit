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
		'@babel/preset-typescript'
	]

	const plugins = [
		[
			'@babel/plugin-proposal-decorators', {
				'legacy': true,
				// 'decoratorsBeforeExport': true
			}
		],
		[
			'@babel/plugin-proposal-class-properties', {
				'loose': true
			}
		]
	]

	const ignore = []

	return {
		presets,
		plugins,
		ignore
	}

}