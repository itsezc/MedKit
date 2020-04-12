import { inject, injectable } from 'inversify'
import { IGatewayManager } from './IGatewayManager'

import { ApolloServer } from 'apollo-server'
import { ApolloGateway } from '@apollo/gateway'
import { remoteContext } from './modules/remoteContext'

@injectable()
export default class GatewayManager implements IGatewayManager {
	protected gateway: ApolloGateway
	protected server: ApolloServer

	public constructor(protected port: number) { this.createGateway() }

	public async init() {
		this.server =  new ApolloServer({
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
		})
		
		this.server
			.listen({ port: this.port })
			.then(info => console.log(`[GATEWAY] started on port - ${info.port}`))
	}

	public async createGateway() {
		this.gateway = new ApolloGateway({
			serviceList: [
				{ name: 'Auth', url: 'http://localhost:8086/graphql' }
			],
			buildService({ url }) {
				return new remoteContext({ url })
			}
		})
	}
}

