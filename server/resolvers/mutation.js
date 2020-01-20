import { fetch } from '../core/GClient'
import { AUTH_TOKEN } from '../authToken'
import BCrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

export const mutationResolver = {
	login: async (parent, { email, password }, context, info) => {

		const query = `
			query accountLogin($email: String!, $password: String!) {
				allAccounts(filter: { email: $email, password: $password }) {
					id
					email
				}
			}
		`

		const user = await fetch.post('', 
			JSON.stringify(
				query,
				variables: {
					email,
					password
				}
			))
				.then(response => response.json())

		// .. Error Handling

		const validPassword = await BCrypt.compare(password, user.password)

		!validPassword ? throw new Error('Invalid Password') : null

		return {
			token: JWT.sign({ id: user.id }, AUTH_TOKEN)
		}

	}
}