import { gql } from 'apollo-server'
import indentify from '../library/indentify'

/**
 *  1) Symptom || Disease -> Analyse if it is a symptom or disease
 *  2)
 * 	a) If it is a disease: find all symptoms assosicated with it
 * 	b) If it is a symptom : find all diseases related to it
 *  3) Ask questions keeping track of the answers
 *  4) Check against ML with all the answers for the right answer
*/

export default {

	handleMessage: async (parent, args, context, info) => {
		
		/**
		 * Get the content from the message
		 */
		const content: string = args.content



	},

	indentify
}