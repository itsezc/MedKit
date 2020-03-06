import gql from 'graphql-tag'
import { query } from '../GClient'
import { DocumentNode } from 'graphql'

export default async ({ symptoms }: { symptoms: [string] }) => {

	const results: [string?] = []
	
	symptoms.forEach(async(symptom: string) => {

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

}