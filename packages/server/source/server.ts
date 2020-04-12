import 'reflect-metadata'
import { inject, injectable } from 'inversify'

@injectable()
export default class Server {
	public static readonly DEBUG: boolean = true

	public constructor(
		@inject()
	) {}
}
