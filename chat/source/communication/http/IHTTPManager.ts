import Hapi from '@hapi/hapi'

export default interface IHTTPInterface {
	init(port: number): void
	getServer(): Hapi.Server
}