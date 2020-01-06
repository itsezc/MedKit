import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export const resolvers = {

	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Date Type',
		parseValue(value) => new Date(value),
		serialize(value) => value.getTime(),
		parseLiteral(ast) {
			
			if (ast.KIND === Kind.INT) {
				return parseInt(ast.value, 10)
			}

			return null
		}
	}),

	Query: {
		message: async (parent, { query }, { dataSources }, info) => {

			const { _text, msg_id, entities } = await dataSources.NLU.message(query)

			const newEntities = []

			for (const entity in entities) {
				newEntities.push({
					type: entity,
					confidence: entities[entity][0].confidence,
					value: entities[entity][0].value
				})
			}

			return {
				id: msg_id,
				text: _text,
				entities: newEntities
			}

		}
	}
}