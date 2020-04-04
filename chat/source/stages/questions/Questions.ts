import { Stage } from '../Stage'
import { IStage } from '../IStage'

type IQuestion = {
	question: string,
	type: string,
	answer: IAnswer[]
}

type IAnswer = {
	title: string,
	value: string
}

export default class Questions extends Stage implements IStage {	
	public async process() {
		const diseases = await this.redis.getList(`${this.socketID}_questions`)
		const cachedQuestions: string[] = []
		diseases.forEach(async disease => {
			const questions = await this.fetchAllQuestions(disease)
			questions.forEach(({ question }) => this.redis.getClient().rpush(`${this.socketID}_questions`, question))
			this.redis.getClient().hset(this.socketID, 'currentQuestion', '0')
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