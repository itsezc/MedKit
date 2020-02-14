// @flow

import { RemoteGraphQLDataSource } from '@apollo/gateway'

export default class AuthenticatedDataSource extends RemoteGraphQLDataSource {
	
	willSendRequest({ request, context }) {
		request.http.headers.set('authorization', context.authorization)
	}

}