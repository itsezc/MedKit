// @flow

import { query } from '../GClient'

export default async(id: number): Promise<Account> => {

	const GET_USER = `
		query getAccount($id: ID!) {
			Account(id: $id) {
				id
				email
				firstName
				lastName
				dateOfBirth
				weight
			}
		}
	`

	const { Account } = await query(GET_USER, { id })

	return Account
}