import { IRedisManager } from '../../../storage/redis'
import { ISocketManager } from '../index'
import { query } from '../../../util/GClient'
import { Auth } from '../../../events/auth'

export default abstract class AbstractEvent {
	public query = query
	public cache = this.redis.getClient()
	public server: SocketIO.Server = this.socketIO.getServer()
	public socket: SocketIO.Socket = this.socketIO.getSocket()
	public socketID: string = this.socket.id
	
	public constructor(
		public redis: IRedisManager,
		public socketIO: ISocketManager
	) { 
		this.cache.HGET(this.socketID, 'token', async (err, reply) => {
			if (this.constructor.name !== 'Auth') {
				const { verified } = await Auth.verify(reply)
				if (!verified) {
					throw new Error('Authentication failed')
				}
			}
		})
	}
}