import { ArangoDBAdapter } from 'cruddl'

export const DB = new ArangoDBAdapter({
	databaseName: 'medkit',
	url: 'http://root@62.171.183.5:8529',
	user: 'root',
	password: 'root01'
})