import { injectable } from 'inversify'

import { GraphQLClient } from 'graphql-request'

injectable()
export default class QueryManager {
	public constructor(
		protected client: GraphQLClient
	) {
		this.client = new GraphQLClient('http://localhost:8085')
	}

	public async query(query: string, variables) {
		const { data } = await this.client.request(query, variables)
		return data
	}
}