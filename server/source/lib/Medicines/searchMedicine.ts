import { query } from '../../util/GClient'

export async function searchMedicine({ term }: { term: string }) {

	const SEARCH_MEDICINE = `
		query searchMedicine($term: String!) {
			allMedications (
				filter: {
					name_like: $term
				}
			) {
				name
			}
		}
	`

	const { allMedications } = await query(SEARCH_MEDICINE, { term })

	return allMedications
}