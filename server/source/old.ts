import { ApolloServer, gql } from 'apollo-server'
import { ApolloGateway, RemoteGraphQLDataSource } from '@apollo/gateway'
import { buildFederatedSchema } from '@apollo/federation'

import { ApolloEngineLogger } from './lib/log'
import remoteContext from './lib/remoteContext'
import { cruddlSchema, appTypeDefs, appResolvers } from './database/generateSchema'
import { authUser } from './core/User/context'

const cruddlServer: ApolloServer = new ApolloServer({
	schema: cruddlSchema,
	context: ({ req }) => req
}) 
//whats document node?
const authServer: ApolloServer = new ApolloServer({
	schema: buildFederatedSchema(
		[
			{
				typeDefs: gql`${appTypeDefs}`,
				resolvers: appResolvers
			}
		]
	),
	context: async ({ req }) => {
		
		const authorization = req.headers.authorization

		const user = authUser(authorization)
		
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
		.then(( info ) => console.log(`[ORM] Gateway (Cruddl) server started on port - ${info.port}`))


	await authServer
		.listen({ port: 8086 })
		.then(async (info) => {
		
			console.log(`[FEDERATION] Auth server started on port - ${info.port}`)
			
			const gateway = new ApolloGateway({
				serviceList: [
					// { name: 'chatHandler', url: 'https://localhost:8087' },
					{ name: 'auth', url: 'http://localhost:8086/graphql' }
				],
				buildService({ name, url }) {
					return new remoteContext({ url })
				}
			})

			const server = new ApolloServer({
				gateway,
				engine: {
					apiKey: 'service:MedKit:Jq_m5qJG3pPBp_ScaExdiA',
					schemaTag: 'development',
					debugPrintReports: true,
				},
				subscriptions: false,
				context: async ({ req }) => {
					return {
						...req, 
						authorization: req.headers.authorization || null
					}

				},
				cacheControl: {
					defaultMaxAge: 1
				},
				plugins: [
					ApolloEngineLogger
				]
			})
		
			await server
				.listen({ port: 8088 })
				.then((info) => console.log(`[GATEWAY] started on port - ${info.port}`))
		
		})	
})()