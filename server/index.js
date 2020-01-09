import { ApolloServer } from 'apollo-server'

import NLU from './nlu'

import { schema } from './database/generateSchema'

const server = new ApolloServer({
	schema,
	context: ({ req }) => req,
	dataSources: () => {
		return {
			NLU: new NLU()
		}
	}
})

server
	.listen({ port: 8086 })
	.then((info) => console.log(`Server started on https://localhost:${info.port}`))