import React from 'react'

import { Screen } from '../components/styles/Screen'
import { View, Text, Button } from 'react-native'

export default (props) => {
	return(
		<Screen>
			<Button
				title='Profile'
				onPress={() => props.navigation.push('Profile')}
			/>
		</Screen>
	)
}