import { generateQuestions } from './generate'

export async function askQuestions(diseases: string[], server: SocketIO.Server) {
	
	const questions = await generateQuestions(diseases)

}