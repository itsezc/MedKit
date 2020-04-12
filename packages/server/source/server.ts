import { ApolloServer, gql } from 'apollo-server'
import { ApolloGateway } from '@apollo/gateway'
import { buildFederatedSchema } from '@apollo/federation'

import { ApolloEngineLogger } from './core/log'
import remoteContext from './core/remoteContext'

import { GraphQLSchema, DocumentNode } from 'graphql'

export class Server {

	private Server: ApolloServer
	private gateway: ApolloGateway

	private ORM: ApolloServer
	private Auth: ApolloServer
	private Health: ApolloServer

	private cruddlSchema: GraphQLSchema
	private appTypeDefs: DocumentNode
	private appResolvers: any

	constructor() {
		this.init()
	}

	private async init() {
		const { cruddlSchema, appTypeDefs, appResolvers } = await import('./database/generateSchema')

		this.cruddlSchema = cruddlSchema
		this.appTypeDefs = appTypeDefs
		this.appResolvers = appResolvers

		await this.initORM()
		await this.initAuth()
		await this.initGateway()
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
		const { authUser } = await import('./lib/Account')
		
		this.Auth = new ApolloServer({
			schema: buildFederatedSchema([
				{
					typeDefs: gql`${this.appTypeDefs}`,
					resolvers: this.appResolvers
				}
			]),
			context: async ({ req }) => {
				const authorization = req.headers.authorization
				const user = await authUser(authorization)
				return {
					...req,
					user
				}
			}
		})

		this.Auth
			.listen({ port: 8086 })
			.then((info) => console.log(`[FEDERATION] Auth server started on port - ${info.port}`))
	}

	private async initGateway() {
		this.gateway = new ApolloGateway({
			serviceList: [
				{ name: 'Auth', url: 'http://localhost:8086/graphql' }
			],
			buildService({ url }) {
				return new remoteContext({ url })
			}
		})

		this.Server = new ApolloServer({
			gateway: this.gateway,
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

		this.Server
			.listen({ port: 8088 })
			.then(info => console.log(`[GATEWAY] started on port - ${info.port}`))
	}
}