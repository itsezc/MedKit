export default interface ISocketManager {
	init(port: number): void
	getServer(): SocketIO.Server
}