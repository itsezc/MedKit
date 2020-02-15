import { ApolloServer, gql } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation'

// @ts-ignore
import typeDefs from './schema.graphql'

const Server: ApolloServer = new ApolloServer({
	schema: buildFederatedSchema([ { typeDefs: gql`${typeDefs}`, resolvers } ])
})