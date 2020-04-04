import { Event, IEvent, Events } from '../../communication/socket'

export default class Answer extends Event implements IEvent {
	public async execute(data: any): Promise<void> {
		const { to, answer }: { to: string, answer: string } = data
		
		this.cache.set(`${this.socketID}_question`, (parseInt(to) + 1).toString())
	}
}