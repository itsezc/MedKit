import { RESTDataSource } from 'apollo-datasource-rest'

export default class NLU extends RESTDataSource {

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