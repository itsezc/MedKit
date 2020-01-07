import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export const resolvers = {
	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Date Type',
		parseValue: (value) => new Date(value),
		serialize: (value) => value.getTime(),
		parseLiteral(ast) {

			if (ast.KIND === Kind.INT) {
				return parseInt(ast.value, 10)
			}

			return null
		}
	})
}