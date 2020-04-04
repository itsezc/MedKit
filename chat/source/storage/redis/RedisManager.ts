import { injectable } from 'inversify'

import Redis from 'redis'
import IRedisManager from './IRedisManager'

@injectable()
export default class RedisManager implements IRedisManager {
	
	public client: Redis.RedisClient

	public init() {
		this.client = Redis.createClient(6379, 'http://62.171.183.5')
		this.client.on('error', (error) => console.error(error))
	}

	public async updateList(key: string, data: string[]) {
		this.client.DEL(key)
		this.client.rpush(key, ...data)
	}

	public async getList(key: string): Promise<typeof results> {
		const results: string[] = []
		this.client.lrange(key, 0, -1, async (err, reply) => {
			if (!err) reply.forEach(instance => results.push(instance))
		})
		return results
	}

	public getClient(): Redis.RedisClient {
		return this.client
	}
}