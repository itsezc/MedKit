import { DocumentNode } from 'graphql'
import { ResolverMap } from '../../../../typings/graphql'

export interface IFederationManager {
	init(typeDefs: DocumentNode, resolvers: ResolverMap): void
}