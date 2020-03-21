import SocketIO from 'socket.io-client'

import { GiftedChat } from 'react-native-gifted-chat'
	
export class chatHandler {
	
	private readonly Socket = SocketIO('http://localhost:8087')
	private setMessages

	constructor(setMessages) {
		this.setMessages = setMessages
		this.Socket.on('message', this.handleMessage)
	}

	private handleMessage(newMessage) {
		return this.setMessages(prevMessages => GiftedChat.append(prevMessages, newMessage))
	}
}