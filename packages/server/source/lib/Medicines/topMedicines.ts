import { query } from '../../util/GClient'

export async function topMedicines({ limit }: { limit: number }): Promise<void> {

	const GET_TOP_MEDICINES: string = `
		query topMedications($limit: Int!) {
			allMedications
			(
				first: $limit
			) {
				name
			}
		}
	`

	const { allMedications } = await query(GET_TOP_MEDICINES, { limit })

	return allMedications
} 