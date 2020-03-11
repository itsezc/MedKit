import { AsyncStorage as Storage } from 'react-native'

export async function verifyAuth(data) {
	const { login: { token } } = data 

	if (token) {
		try {
			await Storage.setItem('token', token)
		} catch (e) {
			console.error('ERROR', e)
		}
	}
}