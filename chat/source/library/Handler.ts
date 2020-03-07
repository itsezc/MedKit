import SocketIO from 'socket.io'

import { app } from '../main'
import { Event } from '../constants'

import { Identify } from './identify'
import { getDiseases } from './getDiseases'

export function Handler(Socket: SocketIO.Socket) {

	// { "index": 5, "message": "Wow" }
	
	const { id } = Socket

	console.log('Client connected with ID', id)

	Socket.on(Event.IDENTIFY, Identify)
	Socket.on(Event.GET_DISEASES, getDiseases)

	Socket.on(Event.DISCONNECT, () => {
		console.log('Client disconnected with ID', id)
	})
	
}