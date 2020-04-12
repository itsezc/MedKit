declare module '*.graphql' {
	import { DocumentNode } from 'graphql'
	const Schema: DocumentNode
    
	export = Schema
}

export interface Context {
	// url: string;
	// session: Session;
	// req: Express.Request;
	// res: express.Response;
	// userLoader: ReturnType<typeof userLoader>;
	// pubsub: PubSub;
}

export type Resolver = (
	parent: any,
	args: any,
	// context: Context,
	info: any
) => any;

export interface ResolverMap {
	[key: string]: {
	  [key: string]: Resolver | { [key: string]: Resolver };
	};
}