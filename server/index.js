import { ApolloServer } from 'apollo-server'

import NLU from './nlu'

import { schema } from './database/generateSchema'
import { getUser } from './core/getUser'

const server = new ApolloServer({
	schema,
	context: ({ req }) => {
		
		const authorization = req.headers.authorization
		
		const user = getUser(authorization)

		return {
			user
		}

	},
	dataSources: () => {
		return {
			NLU: new NLU()
		}
	}
})

server
	.listen({ port: 8086 })
	.then((info) => console.log(`Server started on https://localhost:${info.port}`))