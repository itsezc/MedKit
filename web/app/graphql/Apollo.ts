import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import { setContext } from 'apollo-link-context'

import { Auth } from './Auth'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
	uri: 'http://192.168.0.111:8088/graphql'
})

const middlewareLink = setContext(async (_, { headers }) => {
	const token = await Auth.getToken()
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		}
	}
})
//@ts-ignore
const link = middlewareLink.concat(httpLink)

export const client = new ApolloClient({
	cache,
	//@ts-ignore
	link
})