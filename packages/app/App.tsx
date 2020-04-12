import 'react-native-gesture-handler'

import * as React from 'react'

import { ApolloProvider } from '@apollo/client'
import { client } from './core/apollo'

import { AppLoading } from 'expo'
import { Main, loadResourcesAsync, handleLoadingError } from './core/init'

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
			<Main />
		</ApolloProvider>
	)
}

