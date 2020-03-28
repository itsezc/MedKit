import { Event } from '../../../../common/constants'

type IQuickReply = {
	type: 'checkbox' | 'radio',
	values: IQuickReplies[]
}

type IQuickReplies = {
	title: string,
	value: string
}

type IReply = {
	_id: number,
	createdAt: Date,
	text: string,
	user: {
		_id: number
	},
	quickReplies: IQuickReply,
	nextEvent: Event
}

export function Message({ 
	text,
	index,
	nextEvent,
	quickReplies
}: {
	text: string,
	index: number,
	nextEvent?: Event,
	quickReplies?: IQuickReply 
}): IReply {
	return {
		_id: index + 1,
		createdAt: new Date(),
		text,
		user: {
			_id: 2
		},
		quickReplies,
		nextEvent
	}
}