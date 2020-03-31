import SocketIO from 'socket.io-client'
import { Auth } from '../auth/Auth'

export class chatHandler {
	
	private readonly Socket = SocketIO('http://192.168.0.111:8087')
	private setMessages: Function

	constructor(setMessages) {
		this.Socket.on('requestAuth', () => {
			this.Socket.emit('auth', Auth.getToken())
		})

		this.Socket.on('message', message => setMessages(message))
	}

	public disconnect() {
		this.Socket.emit('requestDisconnect')
	}
}