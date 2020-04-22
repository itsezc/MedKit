import { query } from '../../util/GClient'
import { filterSymptoms } from '../../flux/models/Symptoms/filterSymptoms'

export async function fetchSymptoms(current: string[]): Promise<typeof allSymptoms> {
	if (current !== undefined
		&& current.length > 0) return await filterSymptoms(current)

	const FETCH_SYMPTOMS = `
		query {
			allSymptoms(
				first: 10,
				filter: {
					diseases_some: {
						id_gt: 1
					}
				}
			) {
				id
				name
			}
		}
	`
	const { allSymptoms }: { allSymptoms: Array<{ id: string, name: string }> } = await query(FETCH_SYMPTOMS)
	return allSymptoms
}

export async function fetchSymptom(current: string[], name: string) {
	const symptoms = await filterSymptoms(current, name)
	return [...new Map(symptoms.map(item => [item['id'], item])).values()]
}