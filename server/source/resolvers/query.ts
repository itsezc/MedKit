import { fetchActivities } from '../lib/Activities'
import { fetchSymptoms, fetchSymptom } from '../lib/Symptoms'
import { searchMedicine, topMedicines } from '../lib/Medicines'

export const queryResolver = {

	getUser: async (parent, args, { user }, info) => user,
	getActivities: async(parent, args, { user }, info) => fetchActivities(user),
	getSymptoms: async(parent, args, context, info) => fetchSymptoms(),
	getSymptom: async (parent, { name }, context, info) => fetchSymptom(name),
	
	searchMedicine: async (parent, args, context, info) => searchMedicine(args),
	topMedicines: async (parent, args, context, info) => topMedicines({ limit: 10 })
	
}