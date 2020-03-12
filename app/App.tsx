import 'react-native-gesture-handler'

import * as React from 'react'
import { Platform, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './core/navigation'

import { ApolloProvider } from '@apollo/client'
import { client } from './core/apollo'

import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font' 

export default function App(props): JSX.Element {

	const [isLoadingComplete, setLoadingComplete] = React.useState(false)

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => setLoadingComplete(true)}
			/>
		)
	}
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				{Platform.OS === 'ios' && <StatusBar barStyle='light-content' backgroundColor={'transparent'} />}
				<Navigation />
			</NavigationContainer>
		</ApolloProvider>
	)
}

async function loadResourcesAsync() {
	await Promise.all([
		Font.loadAsync({
			'circular-std': require('./assets/fonts/CircularStd-Medium.ttf')
		})
	])
}

function handleLoadingError(error) {
	console.warn('\n', error)
}