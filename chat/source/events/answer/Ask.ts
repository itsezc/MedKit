import { Event } from '../Abstract'
import { IEvent, Events } from '../../communication/socket'

import { compileMessage } from '../../messaging/Message'
import { query } from '../../util/GClient'
	
class Ask extends Event implements IEvent {
	public async execute(last: string) {
		const questions = await this.cache.hkeys(`${this.socketID}_questions_answers`)
		if (questions[questions.length - 1] !== last) {
			const next = questions[questions.indexOf(last) + 1]
			
			const { question, type, answers } = await this.fetchQuestion(next)
			this.sendQuestion({ question, type, answers })
		}
	}

	private async fetchQuestion(id: string): Promise<typeof question> {
		const FETCH_QUESTION: string = `
			getQuestion($id: ID!) {
				question(id: $Id) {
					question
					type
					answers {
						title
						value
					}
				}
			}
		`
		const { question } = await query(FETCH_QUESTION, { id })
	}

	private async sendQuestion({ question, type, answers }: { question: string, type: 'checkbox' | 'radio', answers: { title: string, value: string }[] }) {
		const messages = await this.cache.hget(this.socketID, 'messages')
		const index = messages ? (parseInt(messages) + 1).toString() : '0'
		const message = compileMessage({
			text: question,
			index: parseInt(index),
			quickReplies: {
				type,
				values: answers
			}
		})
		this.server.emit(Events.ASK_QUESTION, message)
		if (messages) await this.cache.hset(this.socketID, 'messages', index)
	}
}

export { Ask }