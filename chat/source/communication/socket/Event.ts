import { IRedisManager } from '../../storage/redis'
import { ISocketManager } from './index'
import { query } from '../../util/GClient'

export default abstract class AbstractEvent {
	public query = query
	public cache = this.redis.getClient()
	public server: SocketIO.Server = this.socketIO.getServer()
	public socket: SocketIO.Socket = this.socketIO.getSocket()
	public socketID: string = this.socket.id
	
	public constructor(
		public redis: IRedisManager,
		public socketIO: ISocketManager
	) {}
}