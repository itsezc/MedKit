// @flow

import appTypeDefs from './schemas/app.graphql'
import { schema as dbSchema } from './database'
import { mergeSchemas, makeExecutableSchema } from 'apollo-server'

import { Date } from '../resolvers/scalars'
import { queryResolver as Query } from '../resolvers/query'
import { mutationResolver as Mutation } from '../resolvers/mutation'

const appSchema = makeExecutableSchema({ typeDefs: appTypeDefs, resolvers: {} })

const schema = mergeSchemas({
	schemas: [
		dbSchema,
		appSchema
	], 
	resolvers: {
		Query,
		Mutation,
		Date
	}
})

export {
	schema
}