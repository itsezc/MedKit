import { AUTH_TOKEN } from '../../authToken'
import JWT from 'jsonwebtoken'

import { fetch } from '../GClient'

export const getUser = async (authorization) => {
	
	const bearerLength = 'Bearer '.length

	if (authorization
		&& authorization !== 'undefined'
		&& authorization.length > bearerLength) {

		const token = authorization.slice(bearerLength)

		const { ok, result } = await new Promise(async (resolve) => {

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

			const query = `
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

			const user = await fetch.post('', 
				JSON.stringify({
					query,
					variables: { id: result.id }
				})
			)

			const { data: { data: { Account } } } = user 

			return Account

		} else {

			console.error(await result)
			return null

		}

		return null
	}

}

