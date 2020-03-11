import React from 'react';
import { Platform } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack'
import { fromLeft } from 'react-navigation-transitions'

import Profile from '../screens/Profile'
import Home from '../screens/Home'
import Chat from '../screens/Chat'
import Login from '../screens/Login'
import Logout from '../screens/Logout'

import { Icon } from '../components/Icon'

const config = Platform.select({
	default: { headerMode: 'none' },
});

const HomeStack = createStackNavigator(
	{
		Login: {
			screen: Login,
			path: 'login'
		},
		Logout: {
			screen: Logout,
			path: 'logout'
		},
		Profile: {
			screen: Profile,
			path: 'profile'
		},
		Home: {
			screen: Home,
			path: 'home'
		},
		Chat: {
			screen: Chat,
			path: 'chat'
		}
	}, {
		transitionConfig: () => fromLeft(600),
		initialRouteName: 'Login',
		...config
	}
);

export default HomeStack
