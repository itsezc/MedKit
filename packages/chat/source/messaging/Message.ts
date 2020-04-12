import { Event } from '../../../common/constants'
import { IQuickReply, IMessage } from '../../typings'

export function compileMessage({
	text,
	index,
	nextEvent,
	quickReplies
}: {
	text: string,
	index?: number,
	nextEvent?: Event,
	quickReplies?: IQuickReply
}): IMessage {
	return {
		_id: index ? index + 1 : 0,
		text,
		createdAt: new Date(),
		user: {
			_id: 2
		},
		nextEvent,
		quickReplies
	}
}