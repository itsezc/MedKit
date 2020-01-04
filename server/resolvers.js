export const resolvers = {
	Query: {
		message: async (parent, { query }, { dataSources }, info) => {

			console.log(await dataSources.NLU.message(query))

			return dataSources.NLU.message(query)

		}
	}
}