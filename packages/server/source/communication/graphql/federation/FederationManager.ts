import { inject, injectable } from 'inversify'

import { ApolloServer } from 'apollo-server'
import { buildFederatedSchema } from '@apollo/federation'

import { DocumentNode } from 'graphql'

@injectable()
export default class FederationManager {
	protected server: ApolloServer
	protected port: number

	public async init(typeDefs: DocumentNode, resolvers: GraphQLResolverMap<any>) {
		this.server = new ApolloServer({
			schema: buildFederatedSchema([ { typeDefs, resolvers }])
		})
		this.server
			.listen({ port: this.port })
			.then((info) => console.log(`[FEDERATION] Auth server started on port - ${info.port}`))
	}
}

