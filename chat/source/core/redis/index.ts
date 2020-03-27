import Redis from 'redis'

export const cache = Redis.createClient()

cache.on('error', (error) => console.error(error))