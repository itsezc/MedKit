import gql from 'graphql-tag'
import { query } from '../GClient'
import { DocumentNode } from 'graphql'

export async function Identify({ symptoms }: { symptoms: string[] }): Promise<string[]> {

	const results: string[] = []
	
	symptoms.forEach(async(symptom) => {

		const FIND_DISEASES: DocumentNode = gql`
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

	return results
}