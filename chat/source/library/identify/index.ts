import gql from 'graphql-tag'
import { query } from '../GClient'
import { DocumentNode } from 'graphql'

export default async ({ terms }: { terms: [string] }) => {

	const results: [string?] = []
	
	terms.forEach(async (term: string) => {

		const FIND_DISEASES: DocumentNode = gql`
			query findDiseases($term: String!) {
				allDiseases(
					filter: {
						symptoms_some: {
							id: $term
						}
					}
				) {
					id
				}
			}
		`
		const diseases: [{ id: string }] = await query(FIND_DISEASES, { term })
	
		diseases.forEach(({ id }) => results.push(id))
		
	})

}