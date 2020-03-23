import SocketIO, { Socket } from 'socket.io'
import Hapi from '@hapi/hapi'
import { Handler } from './library/Handler'
import { Event } from '../../common/constants'

export class Server {
	
	public readonly port:number = 8087
	public server: SocketIO.Server
	private http: Hapi.Server

	constructor() {
		this.init()
	}

	private async init() {
		this.http = new Hapi.Server({ port: this.port })
		await this.http.start()
		console.log(`[HTTP] Server started on port ${this.http.info.port}`)
		this.server = SocketIO(this.http.listener)
		console.log(`[WS] Server binded to HTTP`)
		this.process()
	}

	private process() {
		this.server.on(Event.CONNECT, (Socket) => Handler(Socket, this.server))
	}
}