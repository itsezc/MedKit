import { inject, injectable } from 'inversify'

import ISocketManager from './ISocketManager'

@injectable()
export default class SocketManager implements ISocketManager {
	private server: SocketIO.Server

	public init(server: SocketIO.Server): void {
		this.server = server
	}
}