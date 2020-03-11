import { AsyncStorage as Storage } from 'react-native'

async function verifyAuth(data) {
	const { login: { token } } = data 

	if (token) {
		try {
			await Storage.setItem('token', token)
		} catch (e) {
			console.error('ERROR', e)
		}
	}
}