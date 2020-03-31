import { IEvent } from '../../../communication/socket/IEvent'

import { IRedisManager } from '../../../storage/redis'
import { ISocketManager } from '../../../communication/socket'

import { query } from '../../../util/GClient'

/**
 * All the possible diseases in likely order
 * 
 */

export default class AskQuestions implements IEvent {
	public constructor(
		private cache: IRedisManager,
		private socket: ISocketManager
	) {}

	public async execute(data: any): Promise<void> {
		const socketID = this.socket.getSocket().id
		const { diseases }: { diseases: string[] } = data

	}

	private async generateQuestions(diseases: string[]) {
		diseases.forEach(async (disease) => {
			const symptoms = await this.fetchSymptoms(disease)		
			symptoms.forEach(async symptom => {

			})
		})
	}

	private async fetchSymptoms(disease: string) {
		const GET_SYMPTOMS: string = `
			query getSymptomsOfDiseases($id: ID!, $language: String!) {
				allDiseases (
					fitler: {
						id: $id
					}
				) {
					symptoms ( 
						fitler: {
							language: $language
						}
					) {
						questions {
							question
							type
							answers {
								title
								value
							}
						}
					}
				}
			}
		`
		const { allDiseases } = await query(GET_SYMPTOMS, { id: disease })
		const symptoms = allDiseases[0].symptoms
		return symptoms
	}
}