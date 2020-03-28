import redis from 'redis'

export const cache = redis.createClient()

cache.on('error', (error) => console.error(error))

export const updateStore =
	(key: string, value: object) => cache.hgetall(key, (err, reply) => cache.hmset(key, { ...reply, ...value }))


export const updateList =
	async (key: string, data: string[]) => {
		cache.DEL(key)
		data.forEach(peice => cache.LPUSH(key, peice))
	}

export {
	redis
}