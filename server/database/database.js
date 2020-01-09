import { ApolloServer } from '@apollo/server'
import { ArangoDBAdapter, Project as ProjectConstructor } from 'cruddl'

import coreSchema from '../schema2.graphql'

export const DB = new ArangoDBAdapter({
	databaseName: 'medkit',
	url: 'http://root@localhost:8529',
	user: 'root',
	password: 'root01'
})

const ProjectConstructor = ({
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
							roles: ['users'],
							access: 'readWrite'
						]
					}
				}
			})
		}
	],
	getExecutionOptions: ({ context }) => ({ authRoles: ['users'] }),
	getOperationIdentifer: ({ context }) => context as object
})

const schema = ProjectConstructor.createSchema(DB)

DB.updateSchema(ProjectConstructor.getModel())

export const CruddlServer = new ApolloServer({
	schema,
	context: ({ req }) => req
})
