import { RedisClient } from 'redis'

export default interface IRedisManager {
	init(): void
	updateList(key: string, data: string[]): void
	getList(key: string): Promise<string[]>
	getClient(): RedisClient
}