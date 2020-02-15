import { query } from '../GClient'

// Example: cold
export default async function(parent, { term }, context, info) {

	// const QUERY_DISEASES = gql`
	// 	query findDisease($term: String!) {
	// 		allDiseases(
	// 			filter: {
	// 				name_like: $term
	// 			}
	// 		) {
	// 			name
	// 		}
	// 	}
	// `
	
	// const { allDiseases } = await query(QUERY_DISEASES, { term })

	// if (allDiseases.name) {
	// 	return {
	// 		diseases: allDiseases.name // An array of names whether its 0, 1, 100
	// 	}
	// }

	/** 
		* Find any symptoms with the search term in the database
	*/

	// const QUERY_SYMPTOMS = gql`
	// 	query findSymptom($term: String) {
	// 		allSymptoms(
	// 			filter: {
	// 				name_like: $term
	// 			}
	// 		) {
	// 			name
	// 		}
	// 	}
	// `	
	// const { allSymptoms } = await query(QUERY_DISEASES, { term })

	// if (allSymptoms.name) {
	// 	return {
	// 		symptoms: [allSymptoms]
	// 	}
	// }

	return {
		diseases: [
			'cold',
			'chest infection',
			'fever',
			'asthma'
		]
	}
}