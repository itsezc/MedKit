import { query } from '../../util/GClient'
import BCrypt from 'bcryptjs'
import { generateToken } from './library/generateToken'

export async function Register(
	{
		email,
		password,
		passswordConfirm,
		firstName, 
		lastName,
		dateOfBirth,
		deviceID
	}: {
		email: string,
		password: string,
		passswordConfirm: typeof password,
		firstName: string,
		lastName: string,
		dateOfBirth: Date,
		deviceID: string
	}
) {
	const CHECK_ACCOUNT_QUERY: string = `
		query checkAccount($email: String!) {
			allAccounts(filter: { email: $email }) {
				id
			}
		}
	`
	const checkAccount = await query(CHECK_ACCOUNT_QUERY, { email })
	if (checkAccount.allAccounts.length > 0) throw new Error('ACCOUNT_EXISTS')
	
	if (password !== passswordConfirm) throw new Error('PASSWORD_CONFIRM')
	password = await BCrypt.hash(password, 14)

	const CREATE_ACCOUNT_MUTATION: string = `
		mutation register($email: String!, $password: String!, $firstName: String!, $lastName: String!, $dateOfBirth: DateTime!) {
			createAccount(input: {
				email: $email,
				password: $password,
				firstName: $firstName,
				lastName: $lastName,
				dateOfBirth: $dateOfBirth
			}) {
				id
			}
		}
	`

	const { createAccount: { id } }: { createAccount: { id: string } } = await query(CREATE_ACCOUNT_MUTATION, { email, password })

	return {
		token: generateToken({ id, deviceID })
	}
}