import { ApolloServer, gql } from 'apollo-server'
import { ApolloGateway } from '@apollo/gateway'
import { buildFederatedSchema } from '@apollo/federation'

import { GraphQLSchema, DocumentNode } from 'graphql'

export class Server {

	private readonly Gateway: ApolloGateway = new ApolloGateway()
	private ORM: ApolloServer
	private Auth: ApolloServer

	private cruddlSchema: GraphQLSchema
	private appTypeDefs: DocumentNode
	private appResolvers: any

	constructor() {
		this.init()
		this.initORM()
		this.initAuth()
	}

	private async init() {
		const { cruddlSchema, appResolvers, appTypeDefs } = await import('./database/generateSchema')
		this.cruddlSchema = cruddlSchema
		this.appResolvers = appResolvers
		this.appTypeDefs = appTypeDefs
	}

	private async initORM() {
		
		this.ORM = new ApolloServer({
			schema: this.cruddlSchema,
			context: ({ req }) => req
		})

		this.ORM
			.listen({ port: 8085 })
			.then((info) => console.log(`[ORM] Gateway (Cruddl) server started on port - ${info.port}`))

	}

	private async initAuth() {
		const { authUser } = await import('./core/User/context')
		
		this.Auth = new ApolloServer({
			schema: buildFederatedSchema([
				{
					typeDefs: this.appTypeDefs,
					resolvers: this.appResolvers
				}
			]),
			context: async ({ req }) => {
				const authorization = req.headers.authorization
				const user = authUser(authorization)
				return {
					...req,
					user
				}
			}
		})
	}
}