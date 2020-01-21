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

		const user = allAccounts[0]

		!user ? throw new Error('No account found') : null

		// const validPassword = await BCrypt.compare(password, user.password)

		// !validPassword ? throw new Error('Invalid Password') : null

		return {
			token: JWT.sign({ id: user.id }, AUTH_TOKEN),
			user
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

		console.log(checkAccount)
		
		checkAccount.allAccounts.length > 0 ? throw new Error('An account with this email exists already') : null

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

		const { allAccounts } = await query(ACCOUNT_CREATE_QUERY, { email, password: hashedPassword })

		const user = allAccounts[0]

		return {
			token: JWT.sign({ id: user.id }, AUTH_TOKEN),
			user
		}
		
	}
}