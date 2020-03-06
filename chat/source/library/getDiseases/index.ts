import { Frequent } from './frequent'

export async function getDiseases(diseases: string[]) {
	
	const getUnique = (diseases: string[]) => diseases.filter((element) => diseases.indexOf(element) === diseases.lastIndexOf(element))

	const likely: string[] = []
	const possibilites: string[] = getUnique(diseases)	

}
