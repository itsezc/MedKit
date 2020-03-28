import { AUTH_TOKEN } from '../../../../server/source/authToken'
import JWT from 'jsonwebtoken'

import { redis, cache } from '../redis'

export async function Auth({ token }: { token: string }, Socket: SocketIO.Socket, Server: SocketIO.Server): Promise<void> {

	/**
	 *  ![SECURITY THREAT]
	 *  Man in the middle attack where token is stolen
	 *  Likely to happen over HTTP / unlikely over HTTPS but possible
	*/

	JWT.verify(token, AUTH_TOKEN, async (error, result: any) => {
		if (result) {
			const { id }: { id: string } = result
			cache.set(Socket.id, id, redis.print)
			cache.get(Socket.id, (err, reply) => Server.emit('message', reply))
		}
	})

}