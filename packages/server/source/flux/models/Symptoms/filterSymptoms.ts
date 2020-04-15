import { getDiseases } from './getDiseases'

export async function filterSymptoms(current: string[], search = '') {
	const results: Array<{ id: string, name: string }> = []
	const diseases = await getDiseases(current, search)
	diseases.forEach(({ symptoms }) => {
		symptoms.forEach((symptom: any) => results.push(symptom))
	})
	return results
}