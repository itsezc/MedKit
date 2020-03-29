import { IEvent } from '../../communication/socket/IEvent'
import { IRedisManager } from '../../storage/redis'
import { ISocketManager } from '../../communication/socket'

import { AUTH_TOKEN } from '../../../../server/source/authToken'
import JWT from 'jsonwebtoken'

export default class Auth implements IEvent {

	public constructor(
		private cache: IRedisManager,
		private socket: ISocketManager,
	) {}

	public async execute({ token }: { token: string }): Promise<void> {
		const socketID = this.socket.getSocket().id
		JWT.verify(token, AUTH_TOKEN, (error, result: any) => {
			if (result) {
				const { id }: { id: string } = result
				this.cache.getClient().set(socketID, id)
				this.cache.getClient().get(socketID, (err, reply) => this.socket.getServer().emit('message', reply))
			}
		})
	}
}