import { Event } from '../../events/Abstract'
import { IEvent } from '../../communication/socket'
import { query } from '../../util/GClient'

export default class Answer extends Event implements IEvent {
	public async execute({ to, answer }: { to: string, answer: string}) {
		const symptoms = this.socketID.concat('_symptoms')
		const askSymptoms = this.socketID.concat('_ask_symptoms')

		if (answer === 'Yes') 
			await this.cache.rpush(symptoms, to)
			await this.check(await this.redis.getList(symptoms))
			
		await this.cache.lrem(askSymptoms, 0, to)

		const next = await this.cache.lrange(askSymptoms, 0, 0)
		if (next.length < 1) /** Evaluate final */
		else /** Ask next question */
	}

	private async check(current: string[]) {
		const GET_DISEASES: string = `
			query getDiseases($current: [ID]!) {
				allDiseases(
					filter: {
						symptoms_every: {
							id_in: $current
						}
					}
				) {
					id
					name
				}
			}
		`
		const { allDiseases } = await query(GET_DISEASES, { current })

		if (allDiseases.length === 1)
			/** Found one likely disease */
		else if (allDiseases.length < 1)
			/** No diseases */
	}
}