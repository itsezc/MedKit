import BCrypt from 'bcryptjs'

import { query } from '../../util/GClient'
import { generateToken } from '../Account/library/generateToken'

export default class Doctor {
	public static async Auth({ email, password }: { email: string, password: string }) {
		const LOGIN_QUERY: string = `
			query DoctorLogin($email: String!, $password: String!) {
				allDoctors(
					filter: {
						account: {
							email: $email
						}
					}
				) {
					account {
						id
						email
						password
					}
				}
			}
		`

		const { allAccounts } = await query(LOGIN_QUERY, { email, password })
		const user = allAccounts[0]

		if (!user) throw new Error('NO_ACCOUNT')
		if (await BCrypt.compare(password, user.password)) throw new Error('INVALID_PASSWORD')

		return {
			token: generateToken({ id: user.id, deviceID: 'browser' })
		}
		
	}
}