import * as React from 'react'
const { useState } = React

import { Platform, StatusBar, AppRegistry } from 'react-native'

import { AppLoading } from 'expo'
import { Asset, JSON } from 'expo-asset'
import * as Font from 'expo-font'

import { ApolloProvider } from '@apollo/client'
import { client } from './Apollo'

import AppNavigator from './navigation/AppNavigator'

import { Screen } from './components/styles/Screen'

export default function App(props) {

	const [isLoadingComplete, setLoadingComplete] = useState(false)

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => handleFinishLoading(setLoadingComplete)}
			/>
		)
	} else {
		return (
			<ApolloProvider client={client}>
				<Screen>
					{Platform.OS === 'ios' && <StatusBar barStyle='light-content' backgroundColor={'transparent'} />}
					<AppNavigator />
				</Screen>
			</ApolloProvider>
		)
	}
}

async function loadResourcesAsync() {
	await Promise.all([
		Asset.loadAsync([
			require('./assets/images/food.png'),
			require('./assets/images/icon.png'),
		]),
		Font.loadAsync({
			'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
		}),
	]);
}
 

function handleLoadingError(error) {
	// In this case, you might want to report the error to your error reporting
	// service, for example Sentry
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}

;AppRegistry.registerComponent('MedKit', () => App)