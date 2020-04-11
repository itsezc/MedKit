import Moment from 'moment'

import { params, types, query } from 'typed-graphqlify'
import { request } from 'graphql-request'

export async function fetchFavorites({ id }: { id: string }) {
	const GET_FAVORITES = {
		allAccountFovoriteRecipes: params(
			{
				filter: {
					acccount: {
						id
					}
				}
			}, [
				{
					id: types.string,
					name: types.string,
					preview: types.string
				}
			]
		)
	}
	const process = query(GET_FAVORITES)
	const result = await request('http://localhost:8085/graphql', process)
	return result
}