import { IRedisManager } from '../storage/redis'
import { ISocketManager } from '../communication/socket'
import { query } from '../util/GClient'
import { Auth } from './auth'

abstract class AbstractEvent {
	public query = query
	public cache = this.redis.getClient()
	public server: SocketIO.Server = this.socketIO.getServer()
	public socket: SocketIO.Socket = this.socketIO.getSocket()
	public socketID: string = this.socket.id
	
	public constructor(
		public redis: IRedisManager,
		public socketIO: ISocketManager
	) { 
		if (this.constructor.name !== 'Auth') {
			this.cache.HGET(this.socketID, 'token', async (err, reply) => {
				const { verified } = await Auth.verify(reply)
				if (!verified) {
					this.socket.disconnect(true)
					throw new Error('Authentication failed')
				}
			})
		}
	}
}

export { AbstractEvent as Event }