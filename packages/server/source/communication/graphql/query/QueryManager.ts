import { injectable } from 'inversify'

import { GraphQLClient } from 'graphql-request'
import { IQueryManager } from './IQueryManager'

injectable()
export default class QueryManager implements IQueryManager {
	public constructor(
		protected client = new GraphQLClient('http://localhost:8085')
	) {}

	public async query(query: string, variables) {
		const { data } = await this.client.request(query, variables)
		return data
	}
}