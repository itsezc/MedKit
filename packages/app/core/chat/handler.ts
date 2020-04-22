import SocketIO from 'socket.io-client'
import { Auth } from '../auth/Auth'

export class chatHandler {
		private readonly Socket = SocketIO.connect('http://62.171.183.5:8087')

	constructor(
		private setMessages: Function
	) { this.handle() }

	async handle() {
		this.Socket.on('connect', async () => {
			const token = await Auth.getToken() 
			this.Socket.emit('auth', { token })
			this.Socket.on('authSuccess', () => console.log(' - APP Auth Confirmed'))
			this.Socket.on('message', message => this.setMessages(message))
		})
	}

	public disconnect() {
		this.Socket.disconnect()
	}
}