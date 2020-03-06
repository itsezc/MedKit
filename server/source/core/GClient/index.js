// @flow 

import Request from 'axios'

export const fetch = Request.create({
	method: 'post',
	baseURL: 'http://localhost:8085',
	timeout: 1000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	responseType: 'json'
})

export const query = async(query: string | DocumentNode, variables?: any) => {
	const { data } = await fetch.post('', JSON.stringify({ query, variables }))
	return data.data
}