// @flow

import { query } from '../GClient'

export default async(id: number) => {

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

	const reqUser = await query(GET_USER, { id })

	const user = reqUser.Account

	return user
}