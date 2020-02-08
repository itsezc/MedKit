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
		'import-graphql'
	]
  
	const ignore = []
  
	return {
	    presets,
	    plugins,
	    ignore
	}
  
  }