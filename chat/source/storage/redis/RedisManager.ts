import { injectable } from 'inversify'

import Redis from 'redis'
import IRedisManager from './IRedisManager'

@injectable()
export default class RedisManager implements IRedisManager {
	
	protected client: Redis.RedisClient

	public init() {
		this.client = Redis.createClient()
		this.client.on('error', (error) => console.error(error))
	}

	public async updateList(key: string, data: string[]) {
		this.client.DEL(key)
		data.forEach(piece => this.client.LPUSH(key, piece))
	}

	public getClient(): Redis.RedisClient {
		return this.client
	}
}