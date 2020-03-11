import * as React from 'react'
import { Text, Button } from 'react-native'
import { Screen } from '../../components/Screen'

export default function ({ navigation }) {
	return (
		<Screen>
			<Button
				title='Register'
				onPress={() => navigation.push('Register')}
			/>
		</Screen>
	)
}