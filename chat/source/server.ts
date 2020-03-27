import SocketIO, { Socket } from 'socket.io'
import Hapi from '@hapi/hapi'
import { Handler } from './library/Handler'
import { Event } from '../../common/constants'

export class Server {

	constructor(
		public readonly port: number = 8087,
		private HTTP: Hapi.Server = new Hapi.Server({ port }),
		public Server: SocketIO.Server = SocketIO(HTTP.listener) 
	) {
		this.init()
	}

	private async init() {
		await this.HTTP.start()
		console.log(`[SOCKET] Server started on port ${this.HTTP.info.port}`)
		this.process()
	}

	private process() {
		this.Server.on(Event.CONNECT, (Socket) => Handler(Socket, this.Server))	
	}
}