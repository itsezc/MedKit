import { AsyncStorage as Storage } from 'react-native'


export const verifyAuth = async (data) => {

	const { login: { token } } = data 

	if (token) {
		try {
			await Storage.setItem('token', token)
		} catch (e) {
			console.log('ERROR', e)
		}
	}
}