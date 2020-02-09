// @flow

import appTypeDefs from './schemas/app.graphql'
import { Date } from '../resolvers/scalars'
import { queryResolver as Query } from '../resolvers/query'
import { mutationResolver as Mutation } from '../resolvers/mutation'

import { schema as cruddlSchema } from './database'

const appResolvers = {
	Query,
	Mutation,
	Date,
	Account: {
		__resolveReference(object) {
			return {
				id: 0,
				firstName: 'Error',
				lastName: 'Gateway'
			}
		}
	}
}

export {
	appTypeDefs,
	appResolvers,
	cruddlSchema
}