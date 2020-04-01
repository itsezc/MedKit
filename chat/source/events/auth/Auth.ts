import { Event } from '../Abstract'
import { IEvent, Events } from '../../communication/socket'

import JWT from 'jsonwebtoken'
import { AUTH_TOKEN } from '../../../../server/source/authToken'

export default class Auth extends Event implements IEvent {
	public async execute({ token }: { token: string }) {
		super.auth()
		const { verified, id } = await Auth.verify(token)
		if (verified
			&& id !== undefined) {
			this.cache.HMSET(this.socketID, {
				'token': token,
				'account': id,
				'verified': 1
			})
			this.server.emit(Events.AUTH_SUCCESS, true)
		}
	}

	public static async verify(token: string) {
		const { ok, result }: { ok: boolean, result: any } = await new Promise(async resolve => {
			JWT.verify(token, AUTH_TOKEN, (error, result) => {
				if (error) resolve({ ok: false, result })
				else resolve({ ok: true, result })
			})
		})
		const { id }: { id: string } = result || { id: undefined }
		return { verified: ok, id }
	}
}