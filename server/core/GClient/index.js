import Request from 'axios'

export const fetch = Request.create({
	method: 'post',
	baseURL: 'http://localhost:8086',
	timeout: 1000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	responseType: 'json'
})

export const query = async(query, variables) => {
	const { data } = await fetch.post('', JSON.stringify({ query, variables }))
	return data.data
}