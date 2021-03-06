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
	    '@babel/plugin-transform-runtime',
	    '@babel/plugin-syntax-function-bind',
	    '@babel/plugin-proposal-class-properties',
	    '@babel/plugin-proposal-throw-expressions',
	    'import-graphql'
	]
  
	const ignore = []
  
	return {
	    presets,
	    plugins,
	    ignore
	}
  
  }