import * as React from 'react'
import { Platform, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from '../../navigation'

import '../translate'

export function Main() {
	return (
		<NavigationContainer>
			<Navigation />
		</NavigationContainer>
	)
}