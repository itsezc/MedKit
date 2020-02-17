import React, { useEffect } from 'react'
import { AsyncStorage as Storage } from 'react-native'

export default (props) => {

	const processLogout = async() => {
		await Storage.removeItem('token')
		props.navigation.push('Login')
	}

	useEffect(() => {
		processLogout()
	}, [])

	return null
}