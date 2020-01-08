import { handleMessage } from '../core/chatHandler'

export const queryResolver = {

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
	},

	handleMessage: async (parent, { index, message }, { dataSources }, info) => {
		return handleMessage(index, message)
	}

}