import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()
const link = new HttpLink({
	uri: 'http://localhost:8086/graphql'
})

export const client = new ApolloClient({
	cache,
	link
})