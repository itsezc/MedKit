import { inject, injectable } from 'inversify'

import { SERVICE_IDENTIFIER } from '../../includes/identifiers'
import { IFederationManager } from '../../communication/graphql/federation/IFederationManager'

import { resolvers } from './resolvers'

@injectable()
export default class Auth {
	protected server: IFederationManager

	constructor(
		@inject(SERVICE_IDENTIFIER.IFederationManager) server: IFederationManager
	) { this.server = server}

	async start() {
		this.server.init({
			typeDefs: await import('../../graphql/app.graphql'),
			resolvers,
			port: 8086
		})
	}
}