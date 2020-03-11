import * as React from 'react'
import { Button } from 'react-native'
import { Screen } from '../../components/Screen'

export default function ({ navigation }) {
	return (
		<Screen>
			<Button
				title='Login'
				onPress={() => navigation.push('Login')}
			/>
		</Screen>	
	)
}