export const resolvers = {
	Query: {
		message: async (parent, { query }, { dataSources }, info) => {

			const data = await dataSources.NLU.message(query)

			const { _text, msg_id, entities } = data 

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