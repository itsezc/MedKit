import { injectable } from  'inversify'
import { IDatabaseManager } from './IDatabaseManager'

import { GraphQLSchema } from 'graphql'
import { ArangoDBAdapter, Project } from 'cruddl'
import { ApolloServer } from 'apollo-server'

import schema from '../../graphql/database.graphql'

@injectable()
export default class DatabaseManager implements IDatabaseManager {
	protected server: ApolloServer
	protected port: number
	
	protected database: ArangoDBAdapter
	protected project: Project
	protected schema: GraphQLSchema
	
	constructor() {
		this.database = new ArangoDBAdapter({
			databaseName: 'medkit',
			url: 'http://root@62.171.183.5:8529',
			user: 'root',
			password: 'root01'
		})
		this.init()
	}

	init() {
		this.project = new Project({
			sources: [
				{
					name: 'schema.graphql',
					body: schema as unknown as string
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
		this.schema = this.project.createSchema(this.database)
		this.database.updateSchema(this.project.getModel())
	}

	public start(port: number = 8085) {
		this.server = new ApolloServer({
			schema: this.schema,
			context: ({ req }) => req
		})
		
		this.server
			.listen({ port:  this.port })
			.then(info => console.log(`[ORM] Gateway (Cruddl) server started on port - ${info.port}`))
	}
}