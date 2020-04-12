export default interface ISocketManager {
	init(port: number): void
	getServer(): SocketIO.Server
	getSocket(): SocketIO.Socket
	close(): void
}