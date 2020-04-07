import { query } from '../../util/GClient'

async function filterSymptoms(current: string[]): Promise<typeof results> {
 	let results: Array<{ id: string, name: string }> = []
	const GET_DISEASES: string = `
		query getDiseasesSymptoms($current: [ID!]!) {
			allDiseases (
				filter: {
					symptoms_some: {
						id_in: $current
					}
				}
			) {
				symptoms (
					filter: {
						id_not_in: $current
					}
				) {
					id
					name
				}
			}
		}
	`
	const { allDiseases }: { allDiseases: /* Array<{ symptoms: { id: string, name: string } }> */ any }
		= await query(GET_DISEASES, { current })
	
	allDiseases.forEach(({ symptoms }: { symptoms: any }) => symptoms.forEach((symptom: any) => results.push(symptom)))
	return results
}


export async function fetchSymptoms(current: string[]): Promise<typeof allSymptoms> {
	if (current !== undefined
		&& current.length > 0) return await filterSymptoms(current)

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
	const { allSymptoms }: { allSymptoms: Array<{ id: string, name: string }> } = await query(FETCH_SYMPTOMS)
	console.log(':::: RESULTS', allSymptoms)
	return allSymptoms
}


/**
 * @CHECK
 */
export async function fetchSymptom(name: string) {

	const FETCH_SYMPTOM = `
		query searchSymptom($name: String!) {
			allSymptoms(
				filter: {
					name_contains: $name
				}
			) {
				id
				name
			}
		}
	`

	const { allSymptoms } = await query(FETCH_SYMPTOM, { name })
	return allSymptoms
}