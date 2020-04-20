import { IQueryManager } from '../source/communication/graphql/query'

declare module '*.graphql' {
	import { DocumentNode } from 'graphql'
	const Schema: DocumentNode
    
	export = Schema
}

export interface Context {
	user: object,
	database: IQueryManager
}

export type Resolver = (
	parent: any,
	args: any,
	context: Context,
	info: any
) => any;

export interface ResolverMap {
	[key: string]: {
	  [key: string]: Resolver | { [key: string]: Resolver };
	};
}