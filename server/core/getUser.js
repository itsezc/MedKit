import { AUTH_TOKEN } from '../authToken'
import JWT from 'jsonwebtoken'

export const getUser = async (authorization) => {
	
	const bearerLength = 'Bearer '.length

	if (authorization && authorization.length > bearerLength) {

		const token = authorization.slice(bearerLength)
		const { ok, result } = await new Promise(resolve => 

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

		)

	}

}