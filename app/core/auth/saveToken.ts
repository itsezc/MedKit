import { AsyncStorage as Storage } from 'react-native'

export async function saveToken(token: string) {
	try {
		await Storage.setItem('token', token)
	} catch (e) {
		console.error('ERROR', e)
	}
}