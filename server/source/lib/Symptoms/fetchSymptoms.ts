import { query } from '../../util/GClient'

export async function fetchSymptoms() {

	const FETCH_SYMPTOMS = `
		query {
			allSymptoms(
				first: 10
			) {
				id
				name
			}
		}
	`

	const { allSymptoms } = await query(FETCH_SYMPTOMS)

	return allSymptoms
}

export async function fetchSymptom(name: string) {

	const FETCH_SYMPTOM = `
		query searchSymptom($name: String!) {
			allSymptoms(
				filter: {
					name_like: $name
				}
			) {
				id
				name
			}
		}
	`

	const { allSymptoms } = await query(FETCH_SYMPTOM, { name })

	return allSymptoms[0]
}