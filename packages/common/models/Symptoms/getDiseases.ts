import { params, types, query } from 'typed-graphqlify'
import { request } from 'graphql-request'

import { setTree } from '../../functions/setTree'

export async function getDiseases(current: string[], search: string = '') {
	const filter = {}
	current.forEach(async (symptom, index) => {
		const depth = []
		for (var i = 0; i < index; i++) { 
			depth.push('AND') 
		}
		await setTree(filter, depth, { 
			symptoms_some: {
				name: symptom
			}
		}, true)
	})
	
	const GET_DISEASES = {
		allDiseases: params(
			{ filter }, [{
				id: types.string,
				name: types.string,
				symptoms: params({
						filter: {
							name_contains: search
						}
					}, [{
						name: types.string
					}]
				)
			}]
		)
	}
	const process = query(GET_DISEASES)
	// DEBUG
	console.info('::: QUERY GENERATED', process)
	// @ts-ignore
	const { allDiseases } = request('http://localhost:8085/graphql', process)
	return allDiseases
}