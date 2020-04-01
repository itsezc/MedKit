import { Event, IEvent } from '../../communication/socket'

import { AUTH_TOKEN } from '../../../../server/source/authToken'
import JWT from 'jsonwebtoken'

export default class Auth extends Event implements IEvent {
	public async execute({ token }: { token: string }): Promise<void> {
		JWT.verify(token, AUTH_TOKEN, (error, result: any) => {
			if (result) {
				const { id }: { id: string } = result
				this.cache.set(this.socketID, id)
				this.cache.get(this.socketID, (err, reply) => this.server.emit('message', reply))
			}
		})
	}
}