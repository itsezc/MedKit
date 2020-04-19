import * as Fastify from 'fastify'

export interface IHTTPManager {
	init(): Promise<void>
	getApp(): Fastify.FastifyInstance
}