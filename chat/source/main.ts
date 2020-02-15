import { ApolloServer, gql } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation'

import resolvers from './resolvers'

// @ts-ignore
import typeDefs from '../schema.graphql'

const Server: ApolloServer = new ApolloServer({
	schema: buildFederatedSchema([ { typeDefs: gql`${typeDefs}`, resolvers } ])
})

Server
	.listen({ port: 8084 })
	.then(( info ) => console.log(`[FEDERATION] Chat server started on port - ${info.port}`))