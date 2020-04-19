import * as Fastify from 'fastify'

export interface IHTTPManager {
	init(port: number): void
	getApp(): Fastify.FastifyInstance
}