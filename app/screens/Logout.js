import React, { useEffect } from 'react'
import { AsyncStorage as Storage } from 'react-native'


export default (props) => {

	useEffect(async() => {
		await Storage.removeItem('token')
		props.navigation.push('/login')
	})

	return null
}