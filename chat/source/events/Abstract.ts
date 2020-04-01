import { IRedisManager } from '../storage/redis'
import { ISocketManager } from '../communication/socket'
import { query } from '../util/GClient'

abstract class AbstractEvent {
	public query = query
	public cache = this.redis.getClient()
	public server: SocketIO.Server = this.socketIO.getServer()
	public socket: SocketIO.Socket = this.socketIO.getSocket()
	public socketID: string = this.socket.id
	
	public constructor(
		public redis: IRedisManager,
		public socketIO: ISocketManager
	) { }
	
	public async auth() {
		if (this.constructor.name !== 'Auth') {
			this.cache.HGET(this.socketID, 'verified', async (err, reply) => {
				if (err) console.error(err)
				if (reply !== '1') {
					this.socket.disconnect(true)
				}
			})
		}
	}
}

export { AbstractEvent as Event }