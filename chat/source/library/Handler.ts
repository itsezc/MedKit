import SocketIO from 'socket.io'

import { app } from '..'
import { Event } from '../constants'

import { Identify } from './identify'
import { getDiseases } from './getDiseases'
import { askQuestions } from './questions'

export function Handler(Socket: SocketIO.Socket, Server = app.server) {

	// { "index": 5, "message": "Wow" }
	
	const { id } = Socket

	console.log('Client connected with ID', id)

	Socket.on(Event.IDENTIFY, Identify)
	Socket.on(Event.GET_DISEASES, getDiseases)

	Socket.on(Event.ASK_QUESTIONS, (diseases: string[]) => askQuestions(diseases, Server))

	Socket.on(Event.DISCONNECT, () => {
		console.log('Client disconnected with ID', id)
	})
	
}