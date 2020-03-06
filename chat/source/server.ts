import SocketIO from 'socket.io'
import Hapi from '@hapi/hapi'

export class Server {
	
	public static readonly PORT:number = 8087
	private server: SocketIO.Server
	private http: Hapi.Server

	constructor() {
		this.init()
	}

	private async init() {
		this.http = Hapi.server({
			port: this.PORT
		})
		await this.http.start()
		this.server = SocketIO(this.http.listener)
		this.process()
	}

	private process() {
		this.server.on('connect', (socket: any) => {

			const { id } = socket
			
			console.log('Client connected with ID ', id)

			socket.on('message', (message: any) => {
				console.log('message')

				// this.server.emit('message', )
			})

			socket.on('disconnect', () => {
				console.log('Client disconnected with ID', id)
			})
		})
	}
}