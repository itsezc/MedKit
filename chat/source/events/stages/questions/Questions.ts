import { Event, IEvent, Events } from '../../../communication/socket'

type IQuestion = {
	question: string,
	type: string,
	answer: IAnswer[]
}

type IAnswer = {
	title: string,
	value: string
}

export default class Questions extends Event implements IEvent {
	public async execute(data: any): Promise<void> {
		const { diseases }: { diseases: string[] } = data
		this.generateQuestions(diseases)
	}

	private async generateQuestions(diseases: string[]): Promise<void> {
		const cachedQuestions: string[] = []
		diseases.forEach(async disease => {
			const questions = await this.fetchAllQuestions(disease)
			questions.forEach(({ question }) => this.cache.LPUSH(`${this.socketID}_questions`, question))
			this.cache.HSET(this.socketID, 'currentQuestion', '0')
		})
	}

	private async fetchAllQuestions(disease: string): Promise<IQuestion[]> {
		const GET_SYMPTOMS: string = `
			query getSymptomsOfDiseases($id: ID!, $language: String!) {
				allDiseases (
					fitler: {
						id: $id
					}
				) {
					symptoms ( 
						fitler: {
							language: $language
						}
					) {
						questions {
							question
							type
							answers {
								title
								value
							}
						}
					}
				}
			}
		`
		const { allDiseases } = await this.query(GET_SYMPTOMS, { id: disease })
		const { questions } = allDiseases[0].symptoms
		return questions
	}
}