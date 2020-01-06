import { RESTDataSource } from 'apollo-datasource-rest'

export default class NLU extends RESTDataSource {

	constructor() {
		super()
		this.baseURL = 'https://api.wit.ai/'
	}

	willSendRequest(request) {
		request.headers.set('Authorization', `Bearer XU5FSZX6L2LQSUTNTD3VE4EE3IQ26WKJ`)
	}

	async message(query) {
		
		return this.get(
			`message?q=${query}`
		)

	}

}