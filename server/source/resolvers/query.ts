import { fetchActivities } from '../core/Activities'
import { fetchSymptoms, fetchSymptom } from '../core/Symptoms'

export const queryResolver = {

	getUser: async (parent, args, { user }, info) => user,
	getActivities: async(parent, args, { user }, info) => fetchActivities(user),
	getSymptoms: async(parent, args, context, info) => fetchSymptoms,
	getSymptom: async(parent, { name }, context, info) => fetchSymptom(name)
	
}