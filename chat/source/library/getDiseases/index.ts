import { Frequent } from './frequent'

export function getDiseases(diseases: string[]): string[] {
	
	const getUnique = (diseases: string[]) => diseases.filter((element) => diseases.indexOf(element) === diseases.lastIndexOf(element))
	const removePossibilities = (diseases: string[], possibilites: string[]) => diseases.filter(disease => !possibilites.includes(disease))

	const possibilites: string[] = getUnique(diseases)
	const likely: string[] = Array.from(new Set(removePossibilities(diseases, possibilites)))

	return likely
}
