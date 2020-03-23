import SocketIO, { Socket } from 'socket.io'

import { Event } from '../../../common/constants'

import { Identify } from './identify'
import { getDiseases } from './getDiseases'
import { askQuestions } from './questions'
import { createMessage } from './Message'

export async function Handler(Socket: SocketIO.Socket, Server: SocketIO.Server) {
	
	const { id } = Socket

	console.log('Client connected with ID', id)

	Server.emit(Event.MESSAGE, await createMessage('Hello what is wrong with you'))

	Socket.on(Event.IDENTIFY, Identify)
	Socket.on(Event.GET_DISEASES, getDiseases)

	Socket.on(Event.ASK_QUESTIONS, (diseases: string[]) => askQuestions(diseases, Server))

	Socket.on(Event.DISCONNECT, () => {
		console.log('Client disconnected with ID', id)
	})
	
}