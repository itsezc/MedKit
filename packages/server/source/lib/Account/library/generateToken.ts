import JWT from 'jsonwebtoken'
import { AUTH_TOKEN } from '../../../authToken'

export function generateToken(payload: { id: string, deviceID: string }) {
	return JWT.sign(payload, AUTH_TOKEN)
}