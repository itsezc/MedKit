import SocketIO from 'socket.io'
import Hapi from '@hapi/hapi'

export class Server {
	
	public readonly port:number = 8087
	private server: SocketIO.Server
	private http: Hapi.Server

	constructor() {
		this.init()
	}

	private async init() {
		this.http = Hapi.server({ port: this.port })
		await this.http.start()
		console.log(`[HTTP] Server started on port ${this.http.info.port}`)
		this.server = SocketIO(this.http.listener)
		console.log(`[WS] Server binded to HTTP`)
		this.process()
	}

	private process() {
		this.server.on('connect', (socket: any) => {

			const { id } = socket
			
			console.log('Client connected with ID', id)

			socket.on('message', (message: any) => {
				console.log('Message recieved', message)

				this.server.emit('message', message)
			})

			socket.on('disconnect', () => {
				console.log('Client disconnected with ID', id)
			})
		})
	}
}