import { params, types, query } from 'typed-graphqlify'
import { request } from 'graphql-request'

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
	const result = await request('http://localhost:8085/graphql', process)
	return result
}