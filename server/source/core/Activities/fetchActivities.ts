import { query } from '../GClient'
import gql from 'graphql-tag'

type Activity = {
	name: string,
	type: string,
	time: string
}

export async function fetchActivities({ id }: { id: string }): Promise<Activity[]> {
	const GET_ACTIVITIES = gql`
		query getActivities($id: ID!) {
			Account(id: $id) {
				activities: {
					name
					type
					time
				}
			}
		}
	`
	const { getActivities } = await query(GET_ACTIVITIES, { id })
	return getActivities
}