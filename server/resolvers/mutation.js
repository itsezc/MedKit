import { fetch } from '../core/GClient'

export const mutationResolver = {
	login: async (parent, { email, password }, context, info) => {

		const query = `
			query accountLogin($email: String!, $password: String!) {
				allAccounts(filter: { email: $email, password: $password }) {
					id
				}
			}
		`

		const fetchUser = await fetch.post('', 
			JSON.stringify(
				query,
				variables: {
					email,
					password
				}
			))
				.then(response => response.json())

	}
}