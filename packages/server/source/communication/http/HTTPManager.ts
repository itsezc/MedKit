import { injectable } from 'inversify'

import Fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'

@injectable()
export default class HTTPManager {
	private app: Fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>

	public async init() {
		this.app = Fastify()
		try {
			await this.app.listen(8087)
			this.app.log.info(`Server is listening on ${this.app.server.address()}`);
		} catch (e) {
			this.app.log.error(e)
			process.exit(1)
		}
	}

	public getServer() {
		return this.app
	}
}