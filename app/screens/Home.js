import React from 'react'

import { Screen } from '../components/styles/Screen'
import { View, Text, Button } from 'react-native'

export default (props) => {
	return(
		<View>
			<Button
				title='Profile'
				onPress={() => props.navigation.navigate('Profile')}

			/>
		</View>
	)
}