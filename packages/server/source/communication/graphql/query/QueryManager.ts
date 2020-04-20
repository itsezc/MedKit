import { injectable } from 'inversify'

import { GraphQLClient } from 'graphql-request'
import { IQueryManager } from './IQueryManager'

injectable()
export class QueryManager implements IQueryManager {
	public constructor(
		protected client = new GraphQLClient('http://localhost:8085')
	) {}

	public async query(queryObj: string, variables?: object) {
		const { data } = await this.client.request(queryObj, variables)
		return data
	}
}