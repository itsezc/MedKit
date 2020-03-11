import 'react-native-gesture-handler'

import React from 'react'
import { Platform, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './core/navigation'

import { ApolloProvider } from '@apollo/client'
import { client } from './core/apollo'

export default function App() {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				{Platform.OS === 'ios' && <StatusBar barStyle='light-content' backgroundColor={'transparent'} />}
				<Navigation />
			</NavigationContainer>
		</ApolloProvider>
	)
}