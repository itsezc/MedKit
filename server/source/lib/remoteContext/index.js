// @flow

import { RemoteGraphQLDataSource } from '@apollo/gateway'

export default class AuthenticatedDataSource extends RemoteGraphQLDataSource {
	
	willSendRequest({ request, context: { authorization }}) {

		request.http.headers.set('authorization', authorization)
		
	}

}