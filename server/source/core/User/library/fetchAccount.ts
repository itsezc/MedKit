import gql from 'graphql-tag'
import { query } from '../../../util/GClient'

type IAccount = {
	id?: string,
	email?: string,
	password?: string,
	firstName?: string,
	lastName?: string,
	dateOfBirth?: string,
	weight?: number
}

export default async(id: string) => {

	const GET_USER = gql`
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