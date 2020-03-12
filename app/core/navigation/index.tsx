import * as React from 'react'
import { TransitionPresets } from '@react-navigation/stack'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'

const Stack = createStackNavigator()

export function Navigation(): JSX.Element {
	const screens = [
		{
			name: 'Login',
			component: Login
		},
		{
			name: 'Register',
			component: Register
		},
		{
			name: 'Home',
			component: Home
		}
	]
	
	return (
		<Stack.Navigator
			initialRouteName='Home'
			headerMode='none'
		>
			{
				screens.map(({ name, component }, index) => (
					<Stack.Screen
						key={index}
						name={name}
						component={component}
						options={{
							...TransitionPresets.SlideFromRightIOS,
						}}
					/>
				))
			}
		</Stack.Navigator>
	)
}
