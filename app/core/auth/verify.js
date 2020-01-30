import { AsyncStorage as Storage } from 'react-native'

export const verifyAuth = async(data) => {
	
	const { login } = data 

	if (login) {

		const { token } = login

		try {

			await Storage.setItem('token', token)

		} catch (e) {

			console.log('ERROR', e)

		}

		console.log('Token: ', await Storage.getItem('token'))
	}
}