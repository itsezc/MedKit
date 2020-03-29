import { inject, injectable } from 'inversify'

import ISocketManger from './communication/socket/ISocketManager'

@injectable()
export default class Chat {

	public static readonly DEBUG = true
	public static readonly PORT: number = 8087

	private socketManager: ISocketManger

	public constructor(
		@inject('ISocketManager') socketManager: ISocketManger
	) {
		this.socketManager = socketManager
	}

}