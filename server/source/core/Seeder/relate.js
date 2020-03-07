import { query } from '../GClient'
import { Data } from '../../../seed'

async function Relate() {

		const { __relations } = Data

		__relations.forEach(async(relation) => {

			const { type } = relation

			const GET_QUERY: string = `
				query {
					all${type}s (
						filter: {
							name: "${relation[type].name}"
						}
					) {
						id
					}
				}
			`
			try {
				let result = await query(GET_QUERY)
				let rootID = result['all' + type + 's'][0].id 

				let relations = Object.keys(relation).filter(el => el !== 'type' && el !== type)

				const relationIDS: number[] = []

				relations.forEach(async(el) => {

					await relation[el].forEach(async(q, index) => {

						const getID = `
							query {
								all${el}s (
									filter: {
										name: "${relation[el][index].name}"
									}
								) {
									id
								}
							}
						`
						const elResult = await query(getID)

						const CREATE_RELATION: string = `
							mutation {
								update${type}(
									input: {
										id: "${rootID}",
										add${el}s: ["${elResult['all' + el + 's'][0].id}"]
									}
								) {
									id
								}
							}
						`
						
						console.log(await query(CREATE_RELATION))

					})
				})


			} catch (e) {
				console.error(e)
			}

		})
}

Relate()