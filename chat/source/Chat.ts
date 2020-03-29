import { inject, injectable } from 'inversify'

import IHTTPManager from './communication/http/IHTTPManager'
import ISocketManger from './communication/socket/ISocketManager'

@injectable()
export default class Chat {

	public static readonly DEBUG = true
	public readonly PORT: number = 8087

	private httpManager: IHTTPManager
	private socketManager: ISocketManger
	
	public constructor(
		@inject('IHTTPManager') httpManager: IHTTPManager,
		@inject('ISocketManager') socketManager: ISocketManger
	) {
		this.httpManager = httpManager
		this.socketManager = socketManager
	}

	init(): void {
		this.httpManager.init(this.PORT)
		this.socketManager.init(this.httpManager.getServer())
	}
}