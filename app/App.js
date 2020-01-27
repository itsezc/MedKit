import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { AppRegistry } from 'react-native'

import { ApolloProvider } from '@apollo/client'
import { client } from './Apollo'

import AppNavigator from './navigation/AppNavigator';

import { Screen } from './components/styles/Screen'
import RainBG from './assets/images/RainBG.svg'

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
		<ApolloProvider client={client}>
			<Screen>
				{Platform.OS === 'ios' && <StatusBar barStyle='light-content' backgroundColor={'transparent'} />}
				<AppNavigator />
				{/* <Profile /> */}
			</Screen>
		</ApolloProvider>
    	);
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
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

AppRegistry.registerComponent('MedicalApp', () => App)