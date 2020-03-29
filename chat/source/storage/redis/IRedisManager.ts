import { RedisClient } from 'redis'

export default interface IRedisManager {
	init(): void
	updateList(key: string, data: string[]): void
	getClient(): RedisClient
}