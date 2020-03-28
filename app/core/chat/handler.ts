import SocketIO from 'socket.io-client'
	
export class chatHandler {
	
	private readonly Socket = SocketIO('http://192.168.0.111:8087')
	private setMessages: Function

	constructor(setMessages) {
		this.Socket.on('message', message => setMessages(message))
	}

	public disconnect() {
		this.Socket.emit('requestDisconnect')
	}
}