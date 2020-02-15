// @flow 

import { AUTH_TOKEN } from '../../authToken'
import fetchAccount from './fetchAccount'
import JWT from 'jsonwebtoken'

import { fetch } from '../GClient'

export const authUser = async (authorization: string | void): IAccount => {
	
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

			const { id }: { id: number} = result
			return await fetchAccount(id)

		} else {

			console.error(await result)

		}
	}

}

