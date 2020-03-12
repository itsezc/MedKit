import * as React from 'react'
import { Platform, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from '../navigation'

export function Main() {
	return (
		<NavigationContainer>
			{Platform.OS === 'ios' && <StatusBar barStyle='light-content' backgroundColor={'transparent'} />}
			<Navigation />
		</NavigationContainer>
	)
}