import { inject, injectable } from 'inversify'
import Hapi from '@hapi/hapi'

import IHTTPInterface from './IHTTPManager'

@injectable()
export default class HTTPManager implements IHTTPInterface {
	private server: Hapi.Server

	init(server: Hapi.Server) {
		this.server = server
	}
}