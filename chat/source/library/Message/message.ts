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

export class Message {

	protected reply: IReply

	constructor(
		private message: string,
		private nextEvent: Event = Event.MESSAGE,
		private index: number = 0 ,
		private quickReplies?: IQuickReply,
	) { this.init() }

	async init(): Promise<IReply> {
		this.reply = {
			_id: this.index + 1,
			createdAt: new Date(),
			text: this.message,
			user: {
				_id: 2
			},
			quickReplies: this.quickReplies,
			nextEvent: this.nextEvent
		}

		return this.reply
	}
}