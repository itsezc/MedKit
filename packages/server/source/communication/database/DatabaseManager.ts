import { inject, injectable } from  'inversify'
import { IDatabaseManager } from './IDatabaseManager'

import { ArangoDBAdapter, Project } from 'cruddl'

@injectable()
export default class DatabaseManager implements IDatabaseManager {
	protected database: ArangoDBAdapter
	protected project: Project

	constructor() {
		this.database = new ArangoDBAdapter({
			databaseName: 'medkit',
			url: 'http://root@62.171.183.5:8529',
			user: 'root',
			password: 'root01'
		})
	}

	init() {
		this.project = new Project({
			sources: [
				{
					name: 'schema.graphql',
					body: coreSchema
				},
				{
					name: 'permission-profiles.json',
					body: JSON.stringify({
						permissionProfiles: {
							default: {
								permissions: [
									{
										roles: ['users'],
										access: 'readWrite'
									}
								]
							}
						}
					})
				}
			],
			getExecutionOptions: ({ context }) => ({ authRoles: ['users'] }),
			getOperationIdentifier: ({ context }: { context: Object }) => context
		})
	}
}