import { inject, injectable } from 'inversify'
import SocketIO from 'socket.io'
import Hapi from '@hapi/hapi'

import ISocketManager from './ISocketManager'

@injectable()
export default class SocketManager implements ISocketManager {
	private server: SocketIO.Server

	public init(server: Hapi.Server): void {
		this.server = SocketIO(server.listener)
	}

	public getServer() {
		return this.server
	}
}