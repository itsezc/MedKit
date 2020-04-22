import { fetchActivities } from '../lib/Activities'
import { fetchSymptoms, fetchSymptom } from '../lib/Symptoms'
import { searchMedicine, topMedicines } from '../lib/Medicines'

import { fetchFavorites, getRecipes, isFavoriteRecipe } from '../lib/Recipes'

export const queryResolver = {

	getUser: async (parent, args, { user }, info) => user,
	getActivities: async(parent, args, { user }, info) => fetchActivities(user),
	getSymptoms: async(parent, { current }: { current: string[] }, context, info) => fetchSymptoms(current),
	getSymptom: async (parent, { current, name }: { current: string [], name: string }, context, info) => fetchSymptom(current, name),
	
	searchMedicine: async (parent, args, context, info) => searchMedicine(args),
	topMedicines: async (parent, args, context, info) => topMedicines({ limit: 10 }),

	getFavoriteRecipes: async (parent, args, { user }, info) => fetchFavorites(user),
	getRecipes: async (parent, args, context, info) => getRecipes(),
	isFavoriteRecipe: async (parent, args, { user }, info) => isFavoriteRecipe({ account: user.id, recipe: args.recipe })
	
}