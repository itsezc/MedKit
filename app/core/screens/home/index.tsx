import * as React from 'react'
import { Button } from 'react-native'

export default function ({ navigation }) {
	return (
		<Button
			title='Press Me'
			onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
		/>		
	)
}