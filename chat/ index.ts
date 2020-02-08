import { ApolloServer } from 'apollo-server'

// @ts-ignore
import typeDefs from './schema.graphql'

const Server: ApolloServer = new ApolloServer({
	typeDefs,
	
})