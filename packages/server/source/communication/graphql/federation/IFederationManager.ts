import { DocumentNode } from 'graphql'
import { ResolverMap } from '../../../../typings/graphql'

export interface IFederationManager {
	init({ typeDefs, resolvers, port }: { typeDefs: DocumentNode, resolvers: ResolverMap, port: number }): void
}