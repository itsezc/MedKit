export const resolvers = {
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