import { IRedisManager } from '../../storage/redis'
import { ISocketManager } from '../../communication/socket'

import { query } from '../../util/GClient'

import { IEvent } from '../../communication/socket/IEvent'

export default class Identify implements IEvent {
	
	private results: string[] = []

	public constructor(
		private cache: IRedisManager,
		private socket: ISocketManager,
	) {}

	public async execute(data: any): Promise<void> {
		const { symptoms }: { symptoms: string[] } = JSON.parse(data)
		symptoms.forEach(async (symptom, index, array) => {
			const FIND_DISEASES: string = `
				query findDiseases($symptom: ID!) {
					allDiseases(
						filter: {
							symptoms_some: {
								id: $symptom
							}
						}
					) {
						id
					}
				}
			`
			const { allDiseases }: { allDiseases: [{ id: string }] } = await query(FIND_DISEASES, { symptom })
			allDiseases.forEach(async ({ id }) => this.results.push(id))
			if (index === array.length - 1) await this.response(this.results)
		})
	}

	public async response(results: string[]): Promise<void> {
		// console.log(this.cache)
		this.cache.getClient().get(this.socket.getSocket().id, async (err, reply) => {
			this.cache.updateList(`user_${reply}`, results)
		})
		this.socket.getServer().emit('message', results)
	}
}