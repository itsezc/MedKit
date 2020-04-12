import 'reflect-metadata'
import { inject, injectable } from 'inversify'

import { SERVICE_IDENTIFIER } from './includes/identifiers'
import { IFederationManager } from './communication/graphql/federation/IFederationManager'
import { IDatabaseManager } from './communication/database/IDatabaseManager'

@injectable()
export default class Server {
	public static readonly DEBUG: boolean = true

	public ORMServer: IDatabaseManager
	public authServer: IFederationManager

	public constructor(
		@inject(SERVICE_IDENTIFIER.IDatabaseManager) ORMServer: IDatabaseManager,
		@inject(SERVICE_IDENTIFIER.IFederationManager) authServer: IFederationManager
	) {
		this.authServer = authServer
		this.ORMServer = ORMServer
	}

	init() {
		this.ORMServer.start()
	}
}
