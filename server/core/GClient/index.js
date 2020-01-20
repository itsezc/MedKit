import Request from 'axios'

export const fetch = Request.create({
	method: 'post',
	baseURL: 'https://localhost:8086',
	timeout: 1000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
})