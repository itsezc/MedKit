import * as React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import Login from '../screens/Login'
import Logout from '../screens/Logout'
import Register from '../screens/Register'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Chat from '../screens/Chat'
import Drugs from '../screens/Drugs'
import Recipes from '../screens/Recipes'

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
		},
		{
			name: 'Profile',
			component: Profile
		}, 
		{
			name: 'Chat',
			component: Chat
		},
		{
			name: 'Logout',
			component: Logout
		},
		{
			name: 'Drugs',
			component: Drugs
		},
		{
			name: 'Recipes',
			component: Recipes
		}
	]
	
	return (
		<Stack.Navigator
			initialRouteName='Login'
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
