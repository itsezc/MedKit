import { IRedisManager } from '../storage/redis'

import { query } from '../util/GClient'

export abstract class Stage {
	public query = query 
	
	constructor(
		public redis: IRedisManager,
		public socketID: string
	) {}
}