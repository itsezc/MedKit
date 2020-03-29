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

	init(server: Hapi.Server) {
		this.server = server
	}
}