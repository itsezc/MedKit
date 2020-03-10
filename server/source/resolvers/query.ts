import { query } from '../core/GClient'
import { handleMessage } from '../core/chatHandler'

export const queryResolver = {

	getUser: async (parent, args, { user }, info) => {
		return user
	},

	handleMessage: async (parent, args: { index, message }, { dataSources }, info) => {
		return handleMessage(index, message)
	}

}