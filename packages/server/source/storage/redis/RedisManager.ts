import { injectable } from 'inversify'

import { createHandyClient, IHandyRedis } from 'handy-redis'
import IRedisManager from './IRedisManager'

@injectable()
export default class RedisManager implements IRedisManager {
	
	public client: IHandyRedis

	public init() {
		this.client = createHandyClient({ port: 6379, host: '62.171.183.5', password: '1234567890' })
	}

	public async updateList(key: string, data: string[]) {
		await this.client.del(key)
		await this.client.rpush(key, ...data)
	}

	public async getList(key: string): Promise<typeof results> {
		let results = await this.client.lrange(key, 0, -1)
		return results
	}

	public getClient(): IHandyRedis {
		return this.client
	}
}