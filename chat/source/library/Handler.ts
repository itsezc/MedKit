import SocketIO, { Socket } from 'socket.io'

import { Event } from '../../../common/constants'

import { Identify } from './identify'
import { getDiseases } from './getDiseases'
import { askQuestions } from './questions'
import { Message } from './message'

export async function Handler(Socket: SocketIO.Socket, Server: SocketIO.Server) {
	
	const { id } = Socket

	console.log('Client connected with ID', id)

	// .. create a screen on the mobile app that lets the user select their symptoms
	// then the chat screen is loaded with a list of symptom ids
	// then the symptom ids are passed on to the identify function
	// then the diseases are organised into likely and unlikely and ordered on the mode
	// then the questions are generated based on each disease of the previous step in order

	Server.emit(Event.MESSAGE, new Message('Hello, welcome to MedKit, today we\'ll diagnose you for COVID-19'))
	Server.emit(Event.MESSAGE, new Message('To begin, do you have a dry cough?', Event.MESSAGE, 1, {
		type: 'checkbox',
		values: [
			{
				title: 'Yes',
				value: 'yes'
			},
			{
				title: 'No',
				value: 'no'
			}
		]
	}))

	Socket.on(Event.REQUEST_DISCONNECT, () => Socket.disconnect())
	Socket.on(Event.MESSAGE, message => console.log(message))

	// Stage 1-3
	Socket.on(Event.IDENTIFY, Identify)
	Socket.on(Event.GET_DISEASES, getDiseases)
	Socket.on(Event.ASK_QUESTIONS, (diseases: string[]) => askQuestions(diseases, Server))

	Socket.on(Event.DISCONNECT, () => {
		console.log('Client disconnected with ID', id)
	})
	
}