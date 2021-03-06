import 'reflect-metadata'
import { inject, injectable } from 'inversify'

import Config from '../config.json'

import IChat from './config/interfaces/IChat'
import ISocketManger from './communication/socket/ISocketManager'

import SERVICE_IDENTIFIERS from './config/identifiers'

@injectable()
export default class Chat implements IChat {

	public static readonly DEBUG = true
	public readonly PORT: number = Config.port

	private socketManager: ISocketManger
	
	public constructor(
		@inject(SERVICE_IDENTIFIERS.ISocketManager) socketManager: ISocketManger
	) {
		this.socketManager = socketManager
	}

	init(): void {
		this.socketManager.init(this.PORT)
	}

	close(): void {
		this.socketManager.close()
	}
}