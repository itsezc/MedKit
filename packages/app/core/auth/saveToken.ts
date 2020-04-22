import { Auth } from './Auth'

export async function saveToken(token: string) {
	try {
		await Auth.setToken(token)
	} catch (e) {
		console.error('ERROR', e)
	}
}