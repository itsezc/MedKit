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

// HomeStack.navigationOptions = {
//   tabBarLabel: 'GP',
//   tabBarIcon: ({ focused }) => (
//     <Icon
//       focused={focused}
//       name='Heart2Line'
//     />
//   ),
// };

// HomeStack.path = '';

// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen,
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

// LinksStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';

// const tabNavigator = createBottomTabNavigator({
//   HomeStack,
//   LinksStack,
//   SettingsStack,
// });

// tabNavigator.path = '';

// export default tabNavigator;

export default HomeStack
