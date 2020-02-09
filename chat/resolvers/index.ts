import { gql } from 'apollo-server'
import { query } from '../../server/core/GClient'

/**
 *  1) Symptom || Disease -> Analyse if it is a symptom or disease
 *  2)
 * 	a) If it is a disease: find all symptoms assosicated with it
 * 	b) If it is a symptom : find all diseases related to it
 *  3) Ask questions keeping track of the answers
 *  4) Check against ML with all the answers for the right answer
*/

export default {

	handleMessage: async (parent, args, context, info) => {
		
		/**
		 * Get the content from the message
		 */
		const content: string = args.content



	},

	identify: async (parent, { term }, context, info) => {		
		
		/**
		 * Find any diseases with the search term in the database
		 */
		
		const QUERY_DISEASES = gql`
			query findDisease($term: String) {
				allDiseases(filter: {
					name_like: $term
				}) {
					name
				}
			}
		`

		const { allDiseases } = await query(QUERY_DISEASES, { term })

		if (allDiseases.name) {
			return {
				parameter: allDiseases.name,
				type: 'disease'
			}
		}

		/** 
		 * Find any symptoms with the search term in the database
		*/

		const QUERY_SYMPTOMS = gql`
			query findSymptom($search: String) {
				allSymptoms(filter: {
					name_like: $search
				}) {
					id
				}
			}
		`	

	}
}