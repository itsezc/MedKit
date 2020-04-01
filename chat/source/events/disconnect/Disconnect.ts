import { Event } from '../Abstract'
import { IEvent } from '../../communication/socket'

export default class Disconnection extends Event implements IEvent {
	public async execute(): Promise<void> {
		this.socket.disconnect(true)
	}
}