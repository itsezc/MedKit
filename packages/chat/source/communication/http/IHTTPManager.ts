import Hapi from '@hapi/hapi'

export default interface IHTTPManager {
	init(port: number): void
	startServer(): Promise<void>
	getServer(): Hapi.Server
}