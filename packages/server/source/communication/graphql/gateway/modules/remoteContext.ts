import { RemoteGraphQLDataSource } from '@apollo/gateway'

class remoteContext extends RemoteGraphQLDataSource {
	
	willSendRequest({ request, context: { authorization }}) {
		request.http.headers.set('authorization', authorization)
	}

}

export { remoteContext }