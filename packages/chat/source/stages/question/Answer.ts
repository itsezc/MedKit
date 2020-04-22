import { Event } from '../../events/Abstract'
import { IEvent } from '../../communication/socket'
import { getDiseases } from '../../../../server/source/flux/models/Symptoms/getDiseases'

import { compileMessage } from '../../messaging/Message'

export default class Answer extends Event implements IEvent {
	public async execute({ to, answer }: { to: string, answer: string }) {
		super.auth()
		const symptoms = this.socketID.concat('_symptoms')
		const askSymptoms = this.socketID.concat('_ask_symptoms')

		if (answer === 'Yes') {
			await this.cache.rpush(symptoms, to)
			await this.check(await this.redis.getList(symptoms))
		}

		await this.cache.lrem(askSymptoms, 0, to)
		const next = await this.cache.lrange(askSymptoms, 0, 0)

		if (next.length < 1) return
		else { this.ask(next[0]) }
	}

	private async ask(next: string[]) {
		const messages = await this.cache.hget(this.socketID, 'messages')
		const index = messages ? parseInt(messages) : 0
		compileMessage({
			text: 'Do you suffer from' + next[0],
			index,
			quickReplies: {
				type: 'radio',
				values: [
					{
						title: 'Yes',
						value: 'Yes'
					},
					{
						title: 'No',
						value: 'No'
					}
				]
			}
		})
	}

	private async check(current: string[]) {
		const diseases = await getDiseases(current)

		if (diseases.length === 1)
			/** Found one likely disease */
		// else if (allDiseases.length < 1)
			/** No diseases */
	}

	private askQuestion() {
		this.socket
	}
}