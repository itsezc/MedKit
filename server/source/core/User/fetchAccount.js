// @flow

import { query } from '../GClient'

export default async(id: number): Promise<IAccount> => {

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

	const { Account }: { Account: IAccount } = await query(GET_USER, { id })

	return Account
}