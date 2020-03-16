import Moment from 'moment'
import { query } from '../../util/GClient'

type Activities = {
	date: string
	activities?: Activity[]
}

type Activity = {
	name: string,
	type: string,
	time: string
}

export async function fetchActivities({ id }: { id: string }): Promise<Activities[]> {

	// @ts-ignore
	const maxDays = Moment(Moment().add(7, 'days')._d).format()

	const GET_ACTIVITIES: string = `
		query getActivities($id: ID!, $maxDays: DateTime!) {
			Account(id: $id) {
				activities(
					filter: {
						time_lt: $maxDays
					}
				) {
					name
					tag
					time
				}
			}
		}
	`
	const { Account: { activities } } = await query(GET_ACTIVITIES, { id, maxDays })

	const grouped: Activities[] = []

	await activities.forEach((activity: Activity, index: number) => {
		let group = Moment(activity.time).set({ 'hour': 0, 'minute': 0, 'second': 0 }).utc().format()
		const currentGroup = grouped.some(e => e.date === group)

		if (!currentGroup) {
			grouped.push({
				date: group,
				activities: [activity]
			})
		} else {
			const x = grouped.findIndex(element => element.date === group)
			grouped[x].activities.push(activity)

		}
	})

	return grouped
}