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

	const today = Moment().set({ 'hour': 0, 'minute': 0, 'second': 0 }).utc().format()
	const maxDays = Moment().add(7, 'days').utc().format()

	const GET_ACTIVITIES: string = `
		query getActivities($id: ID!, $maxDays: DateTime!, $today: DateTime!) {
			Account(id: $id) {
				activities(
					filter: {
						time_lt: $maxDays,
						AND: {
							time_gte: $today
						}
					},
					orderBy: time_ASC
				) {
					name
					tag
					time
				}
			}
		}
	`
	const { Account: { activities } } = await query(GET_ACTIVITIES, { id, maxDays, today })

	const grouped: Activities[] = []

	for (var i = 0; i < 7; i++) {

		const date = Moment().set({ 'hour': 0, 'minute': 0, 'second': 0 }).add(i, 'day').utc().format()
		grouped.push({
			date
		})
	}

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
			grouped[x].activities ?
				grouped[x].activities.push(activity) : grouped[x].activities = [activity]
		}
	})

	return grouped
}