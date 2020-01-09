// @flow

import appTypeDefs from '../schema.graphql'
import { schema as dbSchema } from './database'
import { mergeSchemas, makeExecutableSchema } from 'apollo-server'

const appSchema = makeExecutableSchema({ typeDefs: appTypeDefs, resolvers: {} })

export const schema = mergeSchemas({
	schemas: [
		dbSchema,
		appSchema
	], 
	resolvers: {}
})