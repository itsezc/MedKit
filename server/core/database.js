import { ArangoDBAdapter, Project } from 'cruddl'

export const DB = new ArangoDBAdapter({
	databaseName: 'medkit',
	url: 'http://root@localhost:8529',
	user: 'root',
	password: 'root01'
})

