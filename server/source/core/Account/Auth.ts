import BCrypt from 'bcryptjs'
import { query } from '../../util/GClient'
import { generateToken } from './library/generateToken'

export async function Auth(
	{
		email,
		password,
		deviceID,
	}: {
		email: string,
		password: string,
		deviceID: string
	}
) {
	const LOGIN_QUERY: string = `
		query checkAccount($email: String!) {
			allAccounts(filter: { email: $email }) {
				id
				email
				password
			}
		}
	`

	const { allAccounts } = await query(LOGIN_QUERY, { email })
	const userAcc = allAccounts[0]
	const { id } = userAcc

	if (!userAcc) throw new Error('NO_ACCOUNT')
	
	const validPassword = await BCrypt.compare(password, userAcc.password)

	if (!validPassword) throw new Error('PASSWORD_INVALID')

	return {
		token: generateToken({ id, deviceID })
	}
}
