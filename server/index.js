import { ApolloServer } from 'apollo-server'

import NLU from './nlu'

import typeDefs from 'schema.graphql'
import { resolvers } from './resolvers'

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => {
		return {
			NLU: new NLU()
		}
	}
})

server
	.listen({ port: 8086 })
	.then((info) => console.log(`Server started on https://localhost:${info.port}`))