import { Event } from '../Abstract'
import { IEvent } from '../../communication/socket'

import Identify from '../../stages/identify/Identify'

export default class Init extends Event implements IEvent {
	protected identify = new Identify(this.redis, this.socketIO)

	public async execute(data: any) {
		const { symptoms }: { symptoms: string[] } = data
		this.preCalc(symptoms)
	}

	public async preCalc(symptoms: string[]) {
		await this.identify.execute({ current: symptoms })
	}
}