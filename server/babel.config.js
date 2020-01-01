module.exports = (api) => {
    
	api.cache(true)
  
	const presets = [
	    [
		  '@babel/preset-env', {
			'targets': {
			    'node': 'current'
			}
		  }
	    ],
	    '@babel/preset-flow'
	]
  
	const plugins = [
	    '@babel/plugin-transform-runtime',
	    '@babel/plugin-syntax-function-bind',
	    '@babel/plugin-proposal-class-properties',
	    'import-graphql'
	]
  
	const ignore = []
  
	return {
	    presets,
	    plugins,
	    ignore
	}
  
  }