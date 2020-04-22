import { Event } from '../Abstract'
import { IEvent } from '../../communication/socket'

export default class Disconnection extends Event implements IEvent {
	public async execute(): Promise<void> {
		await this.cache.del(this.socketID)
		await this.cache.del(`${this.socketID}_questions_answers`)
		this.socket.disconnect(true)
	}
}