import { inject, injectable } from 'inversify'
import SocketIO from 'socket.io'

import { SERVICE_IDENTIFIER } from 'server/source/includes/identifiers'
import { IHTTPManager } from '../http'

import { ISocketManager } from './ISocketManager'

@injectable()
export default class SocketManager implements ISocketManager {
	protected server: SocketIO.Server
	protected socket: SocketIO.Socket

	protected HTTPManager: IHTTPManager

	constructor(
		@inject(SERVICE_IDENTIFIER.IHTTPManager) httpManager: IHTTPManager
	) {
		this.HTTPManager = httpManager
	}

	public async init() {
		this.server = SocketIO(this.HTTPManager.getApp().server)
	}

	public getServer(): SocketIO.Server {
		return this.server
	}

	public getSocket(): SocketIO.Socket {
		return this.socket
	}
}