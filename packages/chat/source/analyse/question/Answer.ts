import { Event } from '../../events/Abstract'
import { IEvent } from '../../communication/socket'
import { query } from '../../util/GClient'

import { compileMessage } from '../../messaging/Message'

export default class Answer extends Event implements IEvent {
	public async execute({ to, answer }: { to: string, answer: string}) {
		super.auth()
		const symptoms = this.socketID.concat('_symptoms')
		const askSymptoms = this.socketID.concat('_ask_symptoms')

		if (answer === 'Yes') {
			await this.cache.rpush(symptoms, to)
			await this.check(await this.redis.getList(symptoms))
		}

		await this.cache.lrem(askSymptoms, 0, to)
		const next = await this.cache.lrange(askSymptoms, 0, 0)

		// if (next.length < 1) /** Evaluate final */
		// else /** Ask next question */
	}

	private async getTree(current: string[]) {
		const tree = {}
		const setDeep = async (obj: object, path: string[], value: any, setrecursively = false) => {
			path.reduce((a, b, level) => {
				if (setrecursively && typeof a[b] === 'undefined' && level !== path.length) {
					a[b] = {}
					return a[b]
				}
				if (level === path.length){
					a[b] = value
					return value
				} 
				return a[b]
			}, obj)
		}

		current.forEach((symptom, index, array) => {
			const depth = []
			for (var i = 0; i < index; i++) { depth.push('AND') }
			await setDeep(tree, depth, { 
				symptoms_some: {
					name: symptom
				}
			}, true)
		})
	}

	private async check(current: string[]) {
		const tree = await this.getTree(current)
		console.log('- DEBUG (tree):', tree)
		const GET_DISEASES: string = `
			query getDiseases($current: [ID]!) {
				allDiseases(
					filter: {
						${tree}
					}
				) {
					id
					name
				}
			}
		`
		const { allDiseases } = await query(GET_DISEASES, { current })

		// if (allDiseases.length === 1)
			/** Found one likely disease */
		// else if (allDiseases.length < 1)
			/** No diseases */
	}

	private askQuestion() {
		this.socket
	}
}