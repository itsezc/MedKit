import { IHandyRedis } from 'handy-redis'

export default interface IRedisManager {
	init(): void
	updateList(key: string, data: string[]): void
	getList(key: string): Promise<string[]>
	getClient(): IHandyRedis
}