import { query } from '../core/GClient'
import { AUTH_TOKEN } from '../authToken'
import BCrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

export const mutationResolver = {
	login: async (parent, { email, password }, context, info) => {

		const ACCOUNT_CHECK_QUERY = `
			query checkAccount($email: String!) {
				allAccounts(filter: { email: $email }) {
					id
					email
					password
				}
			}
		`

		const { allAccounts } = await query(ACCOUNT_CHECK_QUERY, { email })

		const userAcc = allAccounts[0]

		if (!userAcc) throw new Error('NO_ACCOUNT')

		const validPassword = await BCrypt.compare(password, userAcc.password)

		if (!validPassword) throw new Error('PASSWORD_INVALID')

		return {
			token: JWT.sign(userAcc, AUTH_TOKEN)
		}

	},

	register: async (parent, { email, password }, context, info) => {

		const ACCOUNT_CHECK_QUERY = `
			query checkAccount($email: String!) {
				allAccounts(filter: { email: $email }) {
					email
				}
			}	
		`

		let checkAccount = await query(ACCOUNT_CHECK_QUERY, { email })
		
		if (checkAccount.allAccounts.length > 0) throw new Error('An account with this email exists')

		const hashedPassword = await BCrypt.hash(password, 14)

		const ACCOUNT_CREATE_QUERY = `
			mutation register($email: String!, $password: String!) {
				createAccount(input: { email: $email, password: $password }) {
					id
					email
					password
				}
			}
		`

		const { createAccount } = await query(ACCOUNT_CREATE_QUERY, { email, password: hashedPassword })

		return {
			token: JWT.sign({ id: createAccount.id }, AUTH_TOKEN)
		}
	}
}