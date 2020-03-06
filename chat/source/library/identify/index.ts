import gql from 'graphql-tag'
import { query } from '../GClient'
import { DocumentNode } from 'graphql'

export default async ({ terms }: { terms: [string] }) => {
	
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
					name
				}
			}
		`
		const results = await query(FIND_DISEASES, { term })
	})

}