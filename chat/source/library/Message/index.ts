// import { Event } from '../../../../common/constants'

// export async function createMessage({
// 	message,
// 	currentIndex,
// 	quickReplies,
// 	nextEvent
// }: {
// 	message: string,
// 	currentIndex?: number,
// 	quickReplies?: Object[],
// 	nextEvent?: Event
// }) {
// 	return {
// 		_id: currentIndex + 1,
// 		text: message,
// 		createdAt: new Date(),
// 		user: {
// 			_id: 2
// 		},
// 		quickReplies,
// 		quickReplies: {
// 			type: 'radio', // or 'radio',
// 			values: [
// 				{
// 					title: 'Less than a day',
// 					value: 'yes',
// 				},
// 				{
// 					title: 'Less than a week',
// 					value: 'yes_picture',
// 				},
// 				{
// 					title: 'Over 1 week',
// 					value: 'no',
// 				},
// 				{
// 					title: 'Over 1 month',
// 					value: 'no',
// 				},
// 				{
// 					title: 'Yes',
// 					value: 'yes'
// 				},
// 				{
// 					title: 'No',
// 					value: 'no'
// 				}
// 			],
// 		},
// 		nextEvent
// 	}
// }


export { Message } from './message'