import { query } from '../../util/GClient'

export async function getSimilarDiseases(current: string[], likely: string) {
	const GET_SIMILAR_DISEASES: string = `
		query getSimilarDiseases($current: [String], $likely: String) {
			allDiseases(
				id_not: $likely,
				AND: {
					symptoms_some: {
						id_in: $current
					}
				}
			) {
				id
				name
			}
		}
	`
	const { allDiseases } = await query(GET_SIMILAR_DISEASES, { current, likely })
	return allDiseases
}