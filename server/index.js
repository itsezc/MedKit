import { ApolloServer } from 'apollo-server'

import { cruddlSchema, appTypeDefs, appResolvers } from './database/generateSchema'
import { getUser } from './core/getUser'

const cruddlServer = new ApolloServer({
	schema: cruddlSchema,
	context: ({ req }) => req
})

cruddlServer
	.listen({ port: 8085 })
	.then(( info ) => console.log(`ArangoDB (Cruddl) server started on port - ${info.port}`))

const server = new ApolloServer({
	typeDefs: appTypeDefs,
	resolvers: appResolvers,
	context: ({ req }) => {
		
		const authorization = req.headers.authorization
		
		const user = getUser(authorization)

		return {
			...req, 
			user
		}

	},
	cacheControl: {
		defaultMaxAge: 1
	}
})

server
	.listen({ port: 8086 })
	.then(( info ) => console.log(`Apollo server started on port - ${info.port}`))