// @flow

import { gql } from 'apollo-server'
import { query } from '../GClient'
import { Data } from '../../../seed'

export async function Seed(): Promise<boolean | void> {

	const DELETE_ALL_ACCOUNTS: GraphQL = `mutation { deleteAllAccounts { id } }`
	const DELETE_ALL_DISEASES: GraphQL = `mutation { deleteAllDiseases { id } }`
	const DELETE_ALL_SYMPTOMS: GraphQL = `mutation { deleteAllSymptoms { id } }`

	try {
	
		await query(DELETE_ALL_ACCOUNTS)
		await query(DELETE_ALL_DISEASES)
		await query(DELETE_ALL_SYMPTOMS)

		Object.keys(Data).forEach(async(property) => await Data[property].forEach(async(GQuery) => console.log(await query(GQuery))))
	} catch (e) {
		console.error(e)
	}
	
	

	return true
}

Seed()