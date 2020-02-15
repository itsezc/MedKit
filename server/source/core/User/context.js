// @flow 

import { AUTH_TOKEN } from '../../authToken'
import fetchAccount from './fetchAccount'
import JWT from 'jsonwebtoken'

import { fetch } from '../GClient'

export const authUser = async (authorization: string | void) => {
	
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

			return await fetchAccount(result.id)

		} else {

			console.error(await result)
			return null

		}
	}

}

