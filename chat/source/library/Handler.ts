import SocketIO from 'socket.io'
import { Event } from '../constants'

export function Handler(Socket: SocketIO.Socket, Server: SocketIO.Server) {

	// { "index": 5, "message": "Wow" }
	
	const { id } = Socket

	console.log('Client connected with ID', id)

	Socket.on(Event.MESSAGE, async(data: string | object) => {
				
		const { index, message }: { index: number, message: string } = typeof data === 'string' ?
													JSON.parse(data) : data

		Server.emit('message', {
			_id: index + 1,
			createdAt: new Date(),
			text: message,
			user: {
				_id: 2,
				name: 'MedKit',
			}
		})
	})

	Socket.on(Event.DISCONNECT, () => {
		console.log('Client disconnected with ID', id)
	})
	
}