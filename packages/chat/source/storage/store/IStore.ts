import { IQuickReply } from '../../../typings'

export interface IStoreUser {
	id: string,
	messages: number,
	questions?: {
		question: string,
		replies: IQuickReply
		answer?: string,
	}[]
}