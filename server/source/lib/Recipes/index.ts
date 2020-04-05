import Moment from 'moment'
import { query } from '../../util/GClient'

export async function fetchReciepes() {

	const FETCH_RECIEPES: string = `
		query {
			allReciepes() {
				name
				image
				ingredients {
					name
					image
				}
				createdAt
			}
		}
	`

}