import { Event } from '../../events/Abstract'
import { IEvent } from '../../communication/socket'

import { query } from '../../util/GClient'
import { getDiseases } from '../../../../server/source/flux/models/Symptoms/getDiseases'

import Result from '../result/Result'

export default class Identify extends Event implements IEvent {
	async execute({ current }: { current: string[] }) {
		current.forEach(async element => 
			await this.cache.rpush(this.socketID.concat('_symptoms'), element))
		
		if (await this.checkUnique(current) === false) this.checkAlternatives(current)
		else new Result(this.redis, this.socketIO).execute()
	}

	private async checkUnique(current: string[]): Promise<boolean | void> {
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
		const diseases = await getDiseases(current)
		diseases.forEach(async ({ symptoms }) => {
			symptoms.forEach(async (symptom: any) => await this.cache.rpush(`${this.socketID}_ask_symptoms`, symptom.id))
		})
	}
}