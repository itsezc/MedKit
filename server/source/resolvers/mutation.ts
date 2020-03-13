import { Auth, Register } from '../core/User'

export const mutationResolver = {
	login: async (parent, args, context, info) => Auth(args),
	register: async (parent, args, context, info) => Register(args)
}