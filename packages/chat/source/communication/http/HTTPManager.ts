import { injectable } from 'inversify'

import Hapi from '@hapi/hapi'

import IHTTPManager from './IHTTPManager'

@injectable()
export default class HTTPManager implements IHTTPManager {
	private server: Hapi.Server

	init(port: number) {
		this.server = new Hapi.Server({ port })
	}

	public getServer() {
		return this.server
	}

	public async startServer() {
		await this.server.start()
		console.log(`[SOCKET] Server started on port ${this.server.info.port}`)
	}
}