import { RESTDataSource } from 'apollo-datasource-rest'

class NLU extends RESTDataSource {

	constructor() {
		super()
		this.baseURL = 'https://api.wit.ai/'
	}

	async message(query) {

		return this.get(
			`message?q=${query}`
		)
		
	}

}