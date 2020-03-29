import Hapi from '@hapi/hapi'

export default interface ISocketManager {
	init(server:  Hapi.Server): void
	getServer(): SocketIO.Server
}