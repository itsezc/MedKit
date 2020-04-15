import { query } from '../../util/GClient'
import { filterSymptoms } from '@medkit/common/models/Symptoms/filterSymptoms'

// export async function filterSymptoms(current: string[], name?: string): Promise<typeof results> {
// 	let results: Array<{ id: string, name: string }> = []
// 	const GET_DISEASES: string = `
// 		query getDiseasesSymptoms($current: [ID!], $name: String) {
// 			allDiseases (
// 				filter: {
// 					symptoms_some: {
// 						id_in: $current
// 					}
// 				}
// 			) {
// 				symptoms (
// 					filter: {
// 						id_not_in: $current,
// 						AND: {
// 							name_contains: $name
// 						}
// 					}
// 				) {
// 					id
// 					name
// 				}
// 			}
// 		}
// 	`
// 	const { allDiseases }: { allDiseases: /* Array<{ symptoms: { id: string, name: string } }> */ any }
// 		= await query(GET_DISEASES, { current, name })
	
// 	allDiseases.forEach(({ symptoms }: { symptoms: any }) => symptoms.forEach((symptom: any) => results.push(symptom)))
// 	return results
// }


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