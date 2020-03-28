import Hapi from '@hapi/hapi'

export default interface IHTTPInterface {
	init(server: Hapi.Server): void
}