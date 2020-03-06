import { gql } from 'apollo-server'
import { query } from '../GClient'

export default async function(parent, { terms }, context, info) {
	
	/**
		Find diseases based on the terms provided
		Terms is reference for the names of symptoms

		@type Terms is an array of strings
	*/
	const FIND_DISEASES = gql`
		query findDiseases($terms: [String]!) {
			allDiseases(
				filter: {

				}
			) {
				id
			}
		}
	`

	/**
		Example response:
		
		[
			{
				id: 1,
			},
			{
				id: 24,
			}
		]
	
	*/

	const { allDiseases } = await query(FIND_DISEASES, { terms })

	const diseases = []
	
	await allDiseases.forEach(disease => diseases.push(disease.id))

	return {
		diseases
	}

}