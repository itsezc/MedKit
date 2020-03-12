import { query } from '../GClient'
import { Data } from '../../../seed'

import gql from 'graphql-tag'
import { DocumentNode } from 'graphql'

export async function Seed(): Promise<boolean | void> {

	const DELETE_ALL_ACCOUNTS: string = `mutation { deleteAllAccounts { id } }`
	const DELETE_ALL_DISEASES: string = `mutation { deleteAllDiseases { id } }`
	const DELETE_ALL_SYMPTOMS: string = `mutation { deleteAllSymptoms { id } }`

	try {
	
		await query(DELETE_ALL_ACCOUNTS)
		await query(DELETE_ALL_DISEASES)
		await query(DELETE_ALL_SYMPTOMS)

		const seed = (({ __relations, ...object }) => object)(Data)

		Object.keys(seed).forEach(async(property) =>
			await Data[property].forEach(async(GQuery: string) => 
				console.log(await query(GQuery))
			)
		)

	} catch (e) {
		console.error(e)
	}

	return true
}

Seed()