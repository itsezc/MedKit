import { query } from '../GClient'
import { updateList } from '../../core/redis'

export async function Identify({ symptoms }: { symptoms: string[] }, { id }: { id: string }): Promise<typeof symptoms> {

	const results: typeof symptoms = []
	
	symptoms.forEach(async(symptom) => {

		const FIND_DISEASES: string = `
			query findDiseases($symptom: String!) {
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
		const diseases: [{ id: string }] = await query(FIND_DISEASES, { symptom })
	
		diseases.forEach(({ id }) => results.push(id))
		
	})

	await updateList(`user_${id}`, results)

	return results
}