import { ArangoDBAdapter, Project as ProjectConstructor } from 'cruddl'
import schema from '../schema2.graphql'

export const DB = new ArangoDBAdapter({
	databaseName: 'medkit',
	url: 'http://root@localhost:8529',
	user: 'root',
	password: 'root01'
})

export const ProjectConstructor({
	sources: [
		{
			name: 'scehma.graphql',
			body: schema
		}
	]
})