export interface ISocketManager {
	init(): void
	getServer(): SocketIO.Server
	getSocket(): SocketIO.Socket
}