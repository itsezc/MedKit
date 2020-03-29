import { inject, injectable } from 'inversify'
import SocketIO from 'socket.io'

import ISocketManager from './ISocketManager'
import IHTTPManager from '../http/IHTTPManager'

import SERVICE_IDENTIFERS from '../../config/identifiers'

@injectable()
export default class SocketManager implements ISocketManager {
	private server: SocketIO.Server
	private httpManager: IHTTPManager

	public constructor(
		@inject(SERVICE_IDENTIFERS.IHTTPManager) httpManager: IHTTPManager
	) {
		this.httpManager = httpManager
	}

	public init(port: number): void {
		this.httpManager.init(port)
		this.server = SocketIO(this.httpManager.getServer().listener)
		this.httpManager.startServer()
	}

	public getServer(): SocketIO.Server {
		return this.server
	}
}