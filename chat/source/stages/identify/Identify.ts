import { Stage } from '../Stage'
import { IStage } from '../IStage'

import { query } from '../../util/GClient'

export default class Identify extends Stage implements IStage {
	private results: string[] = []

	public async process(symptoms: string[]) {
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
		this.redis.updateList(`${this.socketID}_diseases`, this.results)
		// this.server.emit('message', this.results)
		console.log('Socket', this.socketID, 'results', this.results)
	}
}