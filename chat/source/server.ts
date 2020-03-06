import SocketIO, { Socket } from 'socket.io'
import Hapi from '@hapi/hapi'
import { Handler } from './library/Handler'

export class Server {
	
	public readonly port:number = 8087
	private server: SocketIO.Server
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
		this.server.on('connect', (Socket) => Handler(Socket, this.server))
	}
}