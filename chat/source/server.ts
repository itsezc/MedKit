import SocketIO from 'socket.io'

export class Server {
	
	public static readonly PORT:number = 8087
	private server: SocketIO.Server
	
	constructor() {
		this.init()
		this.process()
		this.listen()
	}

	private init() {
		this.server = SocketIO()
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

	private listen() {
		this.server.listen(PORT)
	}

}