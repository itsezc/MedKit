import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

import { AsyncStorage as Storage } from 'react-native'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
	uri: 'http://localhost:8086/graphql'
})

const middlewareLink = new ApolloLink(async(operation, forward) => {

	operation.setContext({
		headers: {
			authorization: await Storage.getItem('token') || null
		}
	})

	return forward(operation)
})

const link = middlewareLink.concat(httpLink)

export const client = new ApolloClient({
	cache,
	link
})