// import { params, types, query } from 'typed-graphqlify'
// import { request } from 'graphql-request'

import { query } from '../../../util/GClient'
export async function getDiseases(current: string[] = [], search: string = ''): Promise<any[]> {
		
	/**
		${
			Object.keys(filter).length > 0 ? 
				`( ${filter} )` : null
		}
	*/

	const GET_DISEASES: string = `
		query getDiseasesSymptoms($search: String) {
			allDiseases${
				current 
					&& current.length > 0 ? 
					`
					(
						filter: {
							symptoms_some: {
								name: "${current[0]}"
							}
								${
									current.length > 1 ? 
									`
									, AND: {
										symptoms_some: {
											name: "${current[1]}"
										}
											${
												current.length > 2 ?
												`
													, AND: {
														symptoms_some: {
															name: "${current[2]}"
														}
														${
															current.length > 3 ?
															`
																, AND: {
																	symptoms_some: {
																		name: "${current[3]}"
																	}
																	${
																		current.length > 4 ?
																		`
																			, AND: {
																				symptoms_some: {
																					name: "${current[4]}"
																				}
																			}
																		` : ''
																	}
																}
															` : ''
														}
													}
												` : ''
											}
									}
									` : ''
								}
						}
					)
					`
					: ''
			} {
				id
				name
				symptoms(
					filter: {
						name_contains: $search
					}
				) {
					id
					name
				}
			}
		}
	`
	// console.log('::::', GET_DISEASES)
	const { allDiseases } = await query(GET_DISEASES, { search })
	return allDiseases
}
