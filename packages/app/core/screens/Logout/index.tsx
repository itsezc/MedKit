import * as React from 'react'
import { AsyncStorage as Storage } from 'react-native'

export default function ({ navigation }): JSX.Element {
	const processLogout = async () => {
		await Storage.removeItem('token')
		navigation.navigate('Login')
	}

	React.useEffect(() => {
		processLogout()
	}, [])

	return null
}