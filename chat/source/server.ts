import SocketIO, { Socket } from 'socket.io'
import Hapi from '@hapi/hapi'

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
		this.server.on('connect', (socket: SocketIO.Socket) => {

			const { id } = socket
			
			console.log('Client connected with ID', id)

			// { "index": 5, "message": "Wow" }

			socket.on('message', async(data: string | object) => {
				
				const { index, message }: { index: number, message: string } = typeof data === 'string' ?
															JSON.parse(data) : data

				this.server.emit('message', {
					_id: index + 1,
					createdAt: new Date(),
					text: message,
					user: {
						_id: 2,
						name: 'MedKit',
					}
				})
			})

			socket.on('disconnect', () => {
				console.log('Client disconnected with ID', id)
			})
		})
	}
}