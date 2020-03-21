import { query } from '../GClient'

import gql from 'graphql-tag'
import { DocumentNode } from 'graphql'

export async function generateQuestions(diseases: string[]): Promise<Question[][]> {

	const questions: Question[][] = []

	/**
	 * Fetch all questions based on the list of IDs provided
	 */
	diseases.forEach(async (disease, index) => {
		const GET_QUESTIONS: DocumentNode = gql`
			query {
				allQuestions(
					filter: {
						diseases_some: {
							id: $disease
						}
					}
				) {
					question
					replies{ 
						title
						value
					}
				}
			}
		`
		const { allQuestions } = await query(GET_QUESTIONS, { disease })
		questions[index] = allQuestions
	})

	return questions
}