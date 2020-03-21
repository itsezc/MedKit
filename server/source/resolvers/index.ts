import { queryResolver } from './query'
import { mutationResolver } from './mutation'
import { Date } from './scalars'

export const resolvers = {
	
	Query: queryResolver,
	Mutation: mutationResolver,
	Date

}