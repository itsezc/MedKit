import { Resolver } from '../../../../../typings/graphql'
import { query,mutation, params, types } from 'typed-graphqlify'

import JWT from 'jsonwebtoken'
import Bcrypt from 'bcryptjs'

function generateToken({ id }: { id: string}) {
	return JWT.sign(id,'MEDKIT_DEV')
}

export const mutations: { [key: string]: Resolver } = {
	login: async (parent, args, { database }, info) => {
		const { email, password }: { email: string, password: string } = args

		const checkAccount = {
			allAccounts: params({
					filter: {
						email
					}
				}, [
					{
						id: types.string,
						password: types.string
					}
				]
			)
		}
		const { allAccounts } = await database.query(query(checkAccount))
		const user = allAccounts[0]

		if (!user) throw new Error('NO_ACCOUNT')
		const validPassword = await Bcrypt.compare(password, user.password)
		if (!validPassword) throw new Error('PASSWORD_INVALID')
		
		return {
			token: generateToken(user)
		}
	},

	register:  async (parent, args, { database }, info) => {
		const { email, password, passwordConfirm }:
			{ email: string, password: string, passwordConfirm: string } = args
	
		const CHECK_ACCOUNT_QUERY = {
			allAccounts: params({
					filter: {
						email
					}
				}, [
					{
						id: types.string
					}
				]
			)
		}
		const checkAccount = await database.query(query(CHECK_ACCOUNT_QUERY))
		
		if (Array.isArray(checkAccount.allAccounts)
			&& checkAccount.allAccounts.length > 0)
			throw new Error('ACCOUNT_EXISTS')

		const CREATE_ACCOUNT_MUTATION = mutation('register', params({
			$email: 'String!',
			$password: 'String!',
			$firstName: 'String!',
			$lastName: 'String!',
			$dateOfBirth: 'DateTime!'	
		}, {
			createAccount: params({
				input: {
					email: '$email',
					$password: '$password',
					$firstName: '$firstName',
					$lastName: '$lastName',
					$dateOfBirth: '$dateOfBirth'
				}
			}, {
				id: types.string
			})
		}))
		const { createAccount } = await database.query(CREATE_ACCOUNT_MUTATION, args)
		// @ts-ignore
		const { id }: { id: string } = createAccount

		return {
			token: generateToken({ id })
		}
	}
}