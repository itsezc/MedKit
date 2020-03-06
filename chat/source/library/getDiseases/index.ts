import { Frequent } from './frequent'

export async function getDiseases(diseases: string[]) {
	
	const getUnique = (diseases: string[]) => diseases.filter((element) => diseases.indexOf(element) === diseases.lastIndexOf(element))
	const removePossibilities = (diseases: string[], possibilites: string[]) => diseases.filter(disease => !possibilites.includes(disease))

	const likely: string[] = []
	const possibilites: string[] = getUnique(diseases)

}
