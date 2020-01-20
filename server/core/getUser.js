import { AUTH_TOKEN } from '../authToken'
import JWT from 'jsonwebtoken'

import Request from 'axios'

const fetch = Request.create({
	method: 'post',
	baseURL: 'https://localhost:8086',
	timeout: 1000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
})


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

			if (ok) {

				const queryGQL = `
					query getAccount($id: Int!) {
						Account(id: $id) {
							email
						}
					}
				`

				fetch.post('', JSON.stringify({
					query,
					variables: { id: result.id }
				}))

			} else {

				console.error(result)
				return null

			}

			return null

		)

	}

}