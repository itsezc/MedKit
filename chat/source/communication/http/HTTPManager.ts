import { inject, injectable } from 'inversify'
import Hapi from '@hapi/hapi'

import IHTTPManager from './IHTTPManager'
import ISocketManager from '../socket/ISocketManager'

@injectable()
export default class HTTPManager implements IHTTPManager {
	private server: Hapi.Server
	private socketManager: ISocketManager

	public constructor(
		@inject('ISocketManager') socketManager: ISocketManager
	) {
		this.socketManager = socketManager
	}

	init(port: number) {
		this.server = new Hapi.Server({ port })
	}

	public getServer() {
		return this.server
	}
}