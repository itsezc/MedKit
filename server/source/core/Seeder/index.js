// @flow

import { gql } from 'apollo-server'
import { query } from '../GClient'
import Data from '../../../seed.graphql'

export async function Seed(): Promise<boolean | void> {

	const DELETE_ALL_DATA: GraphQL = gql``
	
	const seed: GraphQL = await gql(Data)

	try {
		await query(seed)
	} catch (e) {
		console.error(e)
	}
	
	return true
}