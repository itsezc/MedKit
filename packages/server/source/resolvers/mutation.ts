import { Auth, Register } from '../lib/Account'
import { makeFavorite } from '../lib/Recipes'

export const mutationResolver = {
	login: async (parent, args, context, info) => Auth(args),
	register: async (parent, args, context, info) => Register(args),

	makeFavorite: async (parent, args, { user }, info) => makeFavorite({ account: user.id, recipe: args.recipe })
}