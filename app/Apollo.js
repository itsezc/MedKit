import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

import { AsyncStorage as Storage } from 'react-native'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
	uri: 'http://localhost:8086/graphql'
})

const middlewareLink = setContext(async (_, { headers }) => {

	const token = await Storage.getItem('token')

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		}
	}
})

const link = middlewareLink.concat(httpLink)

export const client = new ApolloClient({
	cache,
	link
})