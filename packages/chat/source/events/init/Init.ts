import { Event } from '../Abstract'
import { IEvent, Events } from '../../communication/socket'

import Identify from '../../stages/identify/Identify'
import FilterDiseases from '../../stages/filterDiseases/FilterDisease'
import Questions from '../../stages/questions/Questions'

export default class Init extends Event implements IEvent {
	protected identify = new Identify(this.redis, this.socketID)
	protected diseases = new FilterDiseases(this.redis, this.socketID)
	protected questions = new Questions(this.redis, this.socketID)

	public async execute(data: any) {
		const { symptoms }: { symptoms: string[] } = data
		this.preCalc(symptoms)
	}

	public async preCalc(symptoms: string[]) {
		await this.identify.process(symptoms)
		await this.diseases.process()
		await this.questions.process()
	}
}