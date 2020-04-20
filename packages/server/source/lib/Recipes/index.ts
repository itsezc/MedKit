import { params, types, query, mutation } from 'typed-graphqlify'
import { request } from 'graphql-request'

export async function isFavoriteRecipe({ account, recipe }: { account: string, recipe: string }) {
	const favorites: string[] = []
	const IS_FAVORITE =  query('isFavorite', {
		Account: params({ id: account}, {
			recipes: [
				{
					id: types.string
				}
			]
		})
	})
	const { Account: { recipes }} = await request('http://localhost:8085', IS_FAVORITE)
	await recipes.forEach(({ id }: { id: string }) => favorites.push(id))
	return favorites.includes(recipe)
}

export async function getRecipes() {
	const GET_RECIPES = query('getRecipes', {
		allRecipes: {
			id: types.string,
			name: types.string,
			preview: types.string
		}
	})
	const { allRecipes } = await request('http://localhost:8085/graphql', GET_RECIPES)
	return allRecipes
}

export async function fetchFavorites({ id }: { id: string }) {
	const GET_FAVORITES = {
		Account: params(
			{ id }, {
				recipes: [
					{
						id: types.string,
						name: types.string,
						preview: types.string
					}
				]
			}
		)
	}
	const process = query(GET_FAVORITES)
	const { Account } = await request('http://localhost:8085/graphql', process)
	return Account.recipes
}

export async function makeFavorite({ account, recipe }: { account: string, recipe: string[] }) {
	const process = mutation('makeFavorite', params({ $account: 'ID!', $recipe: '[ID!]!' }, {
		updateAccount: params({ input: { 
				id: '$account',
				addRecipes: '$recipe'
			} 
		}, {
			id: types.string
		})
	}))
	const { updateAccount: { id } } = await request('http://localhost:8085/graphql', process, { account, recipe })
	return id
}