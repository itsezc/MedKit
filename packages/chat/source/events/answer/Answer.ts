import { Event } from '../Abstract'
import { IEvent } from '../../communication/socket'

import { Ask } from './Ask'

export default class Answer extends Event implements IEvent {
	public async execute({ to, value }: { to: string, value: string }) {
		await this.cache.hset(`${this.socketID}_questions_answers`, to, value)
		const reply = new Ask(this.redis, this.socketIO)
		reply.execute(to)
	}
}