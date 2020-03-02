import identify from '../library/identify'

/**
 *  1) List of Symptoms => Find the appropriate disease
 *  2) Ask questions keeping track of the answers
 *  3) Check against ML with all the answers for the right answer
*/

export const queryResolver = {

	handleMessage: async (parent, args, context, info) => {
		
		/**
		 * Get the content from the message
		 */
		const content: string = args.contents

	},

	identify
	
}