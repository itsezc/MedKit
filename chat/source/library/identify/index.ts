import { query } from '../GClient'
import { updateList } from '../../core/redis'

export async function Identify(
	{ symptoms }: { symptoms: string[] },
	{ id }: { id: string },
	Server: SocketIO.Server
): Promise<void> {

	let results: typeof symptoms = []

	const response = async (results: typeof symptoms) => {
		await updateList(`user_${id}`, results)
		Server.emit('message', results)
	} 

	symptoms.forEach(async(symptom, index, array) => {

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
		
		allDiseases.forEach(async ({ id }) => results.push(id))

		if (index === array.length - 1) {
			await response(results)
		}
	})
}