import { query } from '../../util/GClient'

import { Event } from '../../events/Abstract'
import { IEvent } from '../../communication/socket'

export default class Identify extends Event implements IEvent {
	
	private results: string[] = []

	public async execute(data: any) {
		const { symptoms }: { symptoms: string[] } = data
		symptoms.forEach(async (symptom, index, array) => {
			const FIND_DISEASES: string = `
				query findDiseases($symptom: ID!) {
					allDiseases(
						filter: {
							symptoms_some: {
								id: $symptom
							}
						}
					) {
						id
					}
				}
			`
			const { allDiseases }: { allDiseases: [{ id: string }] } = await query(FIND_DISEASES, { symptom })
			allDiseases.forEach(async ({ id }) => this.results.push(id))
			if (index === array.length - 1) await this.response()
		})
	}

	public async response() {
		this.cache.get(this.socketID, async (err, reply) => {
			this.redis.updateList(`user_${reply}`, this.results)
		})
		this.server.emit('message', this.results)
	}
}