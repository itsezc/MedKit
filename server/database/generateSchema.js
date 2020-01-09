// @flow

import appTypeDefs from './schemas/app.graphql'
import { schema as dbSchema } from './database'
import { mergeSchemas, makeExecutableSchema } from 'apollo-server'

import { Date } from '../resolvers/scalars'
import { queryResolver as Query } from '../resolvers/query'

const appSchema = makeExecutableSchema({ typeDefs: appTypeDefs, resolvers: {} })

export const schema = mergeSchemas({
	schemas: [
		dbSchema,
		appSchema
	], 
	resolvers: {
		Query,
		Date
	}
})