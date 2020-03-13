import { handleMessage } from '../core/chatHandler'
import { fetchActivities } from '../core/Activities'

export const queryResolver = {

	getUser: async (parent, args, { user }, info) => user,

	handleMessage: async (parent, args: { index, message }, context, info) => {
		return handleMessage(index, message)
	},

	getActivities: async(parent, args, { user }, info) => fetchActivities(user)

}