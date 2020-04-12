import { Event } from '../../events/Abstract'
import { IEvent } from '../../communication/socket'

import { query } from '../../util/GClient'

export default class Identify extends Event implements IEvent {
	async execute({ current }: { current: string[] }) {
		current.forEach(async element => 
			await this.cache.rpush(this.socketID.concat('_symptoms'), element))
		if (await this.checkUnique(current) === false) this.checkAlternatives(current)
	}

	private async checkUnique(current: string[]): Promise<false | void> {
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

		if (allDiseases.length > 0) return false 
	}

	private async checkAlternatives(current: string[]) {
		const GET_DISEASE: string = `
			query getDiseases($current: [ID]!) {
				allDiseases (
					filter: {
						symptoms_some: {
							id_in: current
						}
					}
				) {
					id
					name
					symptoms(
						filter: {
							id_not_in: $current
						}
					) {
						id
					}
				}
			}
		`
		const { allDiseases } = await query(GET_DISEASE, { current })
		
		allDiseases.forEach(async ({ symptoms }) => {
			symptoms.forEach(async symptom => await this.cache.rpush(`${this.socketID}_ask_symptoms`, symptom.id))
		})
	}
}