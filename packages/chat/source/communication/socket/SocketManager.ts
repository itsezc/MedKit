import { inject, injectable } from 'inversify'

import SocketIO from 'socket.io'

import ISocketManager from './ISocketManager'
import IHTTPManager from '../http/IHTTPManager'
import IEventManager from './events/IEventManager'

import SERVICE_IDENTIFERS from '../../config/identifiers'

@injectable()
export default class SocketManager implements ISocketManager {
	protected server: SocketIO.Server
	protected socket: SocketIO.Socket

	private httpManager: IHTTPManager
	private eventManager: IEventManager

	public constructor(
		@inject(SERVICE_IDENTIFERS.IHTTPManager) httpManager: IHTTPManager,
		@inject(SERVICE_IDENTIFERS.IEventManager) eventManager: IEventManager
	) {
		this.httpManager = httpManager
		this.eventManager = eventManager
	}

	public async init(port: number): Promise<void> {
		this.httpManager.init(port)
		this.server = SocketIO(this.httpManager.getServer().listener)
		await this.httpManager.startServer()
		this.handleEvents()
	}

	public getServer(): SocketIO.Server {
		return this.server
	}

	public getSocket(): SocketIO.Socket {
		return this.socket
	}
	
	private handleEvents(): void {
		this.server.on('connection', (socket) => {
			console.log('Connected - ', socket.id)
			this.socket = socket
			this.eventManager.init(this)
			this.eventManager.events.forEach((event, key) => {
				socket.on(key, (data) => event.execute(data))
			})
			socket.on('disonnect', () => console.log('Disconnected', socket.id))
		})
	}

	public close() {
		this.server.close()
	}
}