import SocketIO from 'socket.io-client'
import { chatHandler } from '../source'

let socket: SocketIOClient.Socket

afterAll((done) => {
	chatHandler.close()
	done()
})

beforeEach((done) => {
	socket = SocketIO.connect('https://localhost:8087')
	socket.on('connect', () => {
		done()
	})
})

afterEach((done) => {
	if (socket.connected) {
		socket.disconnect()
	}
	done()
})

describe('Chat implementation tests', () => {
	test('EVENT - requestDisconnect', () => {
		socket.emit('requestDisconnect')
		socket.once('disconnect', () => {
			expect(socket.connected).toBe(false)
		})
	})
})
