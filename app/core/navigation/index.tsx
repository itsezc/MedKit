import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export function navigation(): JSX.Element {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='home'
					component={Home}
					options={{ title: 'Welcome' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)	
}