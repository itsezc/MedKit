import { ApolloServer } from 'apollo-server'
import { ApolloGateway } from '@apollo/gateway'
import { buildFederatedSchema } from '@apollo/federation'

import { cruddlSchema, appTypeDefs, appResolvers } from './database/generateSchema'
import { getUser } from './core/getUser'

// Custom directives error with Date type?

const cruddlServer = new ApolloServer({
	schema: cruddlSchema,
	context: ({ req }) => req
})

const authServer = new ApolloServer({
	schema: buildFederatedSchema([
		{
			typeDefs: appTypeDefs,
			resolvers: appResolvers,
		}
	]),
	context: async ({ req }) => {
		
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
	
;(async () => {

	await cruddlServer
		.listen({ port: 8085 })
		.then(( info ) => console.log(`ArangoDB (Cruddl) server started on port - ${info.port}`))


	await authServer
		.listen({ port: 8086 })
		.then(async (info) => {
		
			console.log(`Auth server started on port - ${info.port}`)
			
			// const gateway = new ApolloGateway({
			// 	serviceList: [
			// 		// { name: 'chatHandler', url: 'https://localhost:8087' },
			// 		{ name: 'auth', url: 'http://localhost:8086/graphql' }
			// 	]
			// })

			// const server = new ApolloServer({
			// 	gateway,
			// 	engine: false,
			// 	subscriptions: false
			// })
		
			// await server
			// 	.listen({ port: 8088 })
			// 	.then((info) => console.log(`🚀 Apollo Federation started on port - ${info.port}`))
		
		})	
})()