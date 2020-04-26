import { params, types, query, mutation } from 'typed-graphqlify'
import { request } from 'graphql-request'

export async function fetchWorkout({ id }: { id: string }) {
	const FETCH_WORKOUT = query('fetchWorkout', {
		Workout: params({ id }, {
			name: types.string
		})
	})
	const { Workout } = await request('https://localhost:8085', FETCH_WORKOUT)
	return Workout
}