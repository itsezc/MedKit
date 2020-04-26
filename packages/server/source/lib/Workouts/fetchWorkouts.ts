import gql from 'graphql-tag'
import { query } from '../../util/GClient'

export async function fetchWorkout({ id }: { id: string }) {
	const FETCH_WORKOUT: string = `
		query fetchWorkout($id: ID!) {
			Workout(id: $id) {
				name
			}
		}
	`
	
}