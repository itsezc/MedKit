import { query } from '../../util/GClient'

type Activity = {
	name: string,
	type: string,
	time: string
}

export async function fetchActivities({ id }: { id: string }): Promise<Activity[]> {

	const GET_ACTIVITIES: string = `
		query getActivities($id: ID!) {
			Account(id: $id) {
				activities {
					name
					tag
					time
				}
			}
		}
	`
	const { getActivities } = await query(GET_ACTIVITIES, { id })
	return getActivities
}