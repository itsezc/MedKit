import { inject, injectable } from 'inversify'
import SocketIO from 'socket.io'

import { SERVICE_IDENTIFIER } from '../../includes/identifiers'
import { IHTTPManager } from '../http'

import { ISocketManager, IEventManager } from '.'

@injectable()
export class SocketManager implements ISocketManager {
	protected server: SocketIO.Server
	protected socket: SocketIO.Socket

	protected HTTPManager: IHTTPManager
	protected EventManager: IEventManager

	constructor(
		@inject(SERVICE_IDENTIFIER.IHTTPManager) httpManager: IHTTPManager,
		@inject(SERVICE_IDENTIFIER.IEventManager) eventManager: IEventManager
	) {
		this.HTTPManager = httpManager
		this.EventManager = eventManager
	}

	public async init() {
		await this.HTTPManager.init()
		this.server = SocketIO(this.HTTPManager.getApp().server)
		this.handleEvents()
	}

	public getServer() {
		return this.server
	}

	public getSocket() {
		return this.socket
	}

	private handleEvents() {
		this.server.on('connection', (socket) => {
			this.socket = socket
			socket.on('disonnect', () => console.log('Disconnected', socket.id))
		})
	}

	public close() {
		this.server.close()
	}
}