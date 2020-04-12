import { AUTH_TOKEN } from '../../authToken'
import fetchAccount from './library/fetchAccount'
import JWT from 'jsonwebtoken'

export async function authUser(authorization: string | void) {
	const bearerLength: number = 'Bearer '.length
	if (authorization
		&& authorization !== 'undefined'
		&& authorization.length > bearerLength) {
		const token: string = authorization.slice(bearerLength)
		const { ok, result }: { ok: boolean, result: any } = await new Promise(async (resolve) => {
			JWT.verify(token, AUTH_TOKEN, (error, result) => {

				if (error) {
					resolve({
						ok: false, 
						result: error
					})
				} else {
					resolve({
						ok: true,
						result
					})
				}

			})
		})
		if (ok) {
			const { id }: { id: string } = result
			return await fetchAccount(id)
		} else console.error(await result)
	}
	return null
}

