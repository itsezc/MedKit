import Hapi from '@hapi/hapi'
import SocketIO from 'socket.io'
import { Event } from '../../common/constants'

import { injectable } from 'inversify'

@injectable()
export class Server {
	constructor(
		public readonly port: number = 8087,
		protected HTTP: Hapi.Server = new Hapi.Server({ port }),
		protected server: SocketIO.Server = SocketIO(HTTP.listener)
	) { this.init() }
	
	private async init() {
		await this.HTTP.start()
		console.log(`[SOCKET] Server started on port ${this.HTTP.info.port}`)
		this.server.on(Event.CONNECT, Handler)
	}

	public getServer(): SocketIO.Server {
		return this.server
	}
}