import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { setContext } from 'apollo-link-context'

import { AsyncStorage as Storage } from 'react-native'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
	uri: 'http://192.168.0.111:8088/graphql'
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