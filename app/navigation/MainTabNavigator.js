import React from 'react';
import { Platform } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack'
import { fromLeft } from 'react-navigation-transitions'

import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';

import Profile from '../screens/Profile'
import HomeScreen from '../screens/Home';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { Icon } from '../components/Icon'

const config = Platform.select({
	web: { headerMode: 'none' },
	default: {},
});

const HomeStack = createStackNavigator(
	{
		Profile: {
			screen: Profile,
			path: 'profile'
		},
		Home: {
			screen: HomeScreen,
			path: 'home'
		},
		
	}, {
		transitionConfig: () => fromLeft(600),
		initialRouteName: 'Home',
		...config
	}
);

export default HomeStack
