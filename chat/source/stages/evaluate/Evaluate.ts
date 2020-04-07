import { Event } from '../../events/Abstract'

export default class Evaluate extends Event {
	public async execute() {
		
	}

	public async resolveDisease() {
		const questions = await this.cache.hgetall(this.socketID.concat('_questions_answers'))
		
		for (let [question, answer] of Object.entries(questions)) {
		}
	}

	public async generateMedicines() {}
	public async generateTreatments() {}
}