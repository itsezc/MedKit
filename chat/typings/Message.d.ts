import { Event } from '../../common/constants'

export type IMessage = {
	_id: number,
	text: string,
	createdAt: Date,
	user: {
		_id: number
	},
	quickReplies: IQuickReply,
	nextEvent: Event
}

type IQuickReply = {
	type: 'checkbox' | 'radio',
	values: IQuickReplyValues[]
}

type IQuickReplyValues = {
	title: string,
	value: string
}