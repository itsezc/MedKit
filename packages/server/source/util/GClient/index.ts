// @flow 

import Request from 'axios'
import { DocumentNode } from 'graphql'

export const query = async(
		query: string | DocumentNode, 
		variables?: any, 
		port: number = 8085
	) => {

	const fetch = Request.create({
		method: 'post',
		baseURL: 'http://localhost:' + port.toString(),
		timeout: 5000,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		responseType: 'json'
	})

	const { data } = await fetch.post('', JSON.stringify({ query, variables }))
	return data.data
}