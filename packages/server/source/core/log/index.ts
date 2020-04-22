export const ApolloEngineLogger = {
	
	requestDidStart(requestContext) {
	
		console.log('Request started Query: \n', requestContext.request.query)

		return {
			parsingDidStart(requestContext) {
				console.log('Parsing started')
			},

			validationDidStart(requestContext) {
				console.log('Validation started')
			}
		}
	
	}

}