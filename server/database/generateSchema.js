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
		__resolveReference(account, context) {
			return {
				id: 0,
				firstName: 'Apollo',
				lastName: 'Federation'
			}
		}
	}
}

export {
	appTypeDefs,
	appResolvers,
	cruddlSchema
}