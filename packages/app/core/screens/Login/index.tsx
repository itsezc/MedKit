import * as React from 'react'

import { Text, View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

import { Screen, Container, Button } from '../../components'

import * as Device from 'expo-device'
import { saveToken, errorHandler } from '../../auth'
import { useMutation, gql, useApolloClient } from '@apollo/client'

import { useTranslation } from 'react-i18next'

const LOGIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!, $deviceID: String!) {
		login(email: $email, password: $password, deviceID: $deviceID) {
			token
		}
	}
`

const initialState = {
	email: '',
	password: '',
	emailError: '',
	passwordError:''
}

export default function ({ navigation }) {

	const [t] = useTranslation()

	const client = useApolloClient()
	const deviceID = Device.osBuildId

	const [{ email, password, emailError, passwordError }, setState] = React.useState(initialState)

	const [processLogin, { loading }] = useMutation(LOGIN_MUTATION, {
		onCompleted: async (data) => {
			const { login: { token } } = data
			await saveToken(token)
			setState({ ...initialState })
			navigation.navigate('Home')
		},
		onError: async (error) => errorHandler(error, setState)
	})

	return (
		<Screen>
			<Container>
				<Text
					style={{ fontSize: 28, fontFamily: 'circular-std', color: '#FFFFFF' }}
				>
					{t('loginToAccount')}
				</Text>

				<View
					style={{
						marginTop: 100
					}}
				>
					<TextField
						value={email}
						onChangeText={text => setState(prevState => ({ ...prevState, email: text }))}
						placeholder={t('exampleEmail')}
						placeholderTextColor='#FFFFFF'
						fontSize={30}
						textColor='#FFFFFF'
						baseColor='#5F87DF'
						error={emailError}
						errorColor='#FFFFFF'
						fontFamily='circular-std'
					/>

					<TextField
						value={password}
						onChangeText={text => setState(prevState => ({ ...prevState, password: text }))}
						placeholder={t('password')}
						placeholderTextColor='#FFFFFF'
						fontSize={30}
						textColor='#FFFFFF'
						baseColor='#5F87DF'
						error={passwordError}
						errorColor='#FFFFFF'
						secureTextEntry
						fontFamily='circular-std'
					/>
				</View>

				<View
					style={{
						flex: 1,
						justifyContent: 'flex-end',
					}}
				>
					<Button
						onPress={() => processLogin({ variables: { email, password, deviceID } })}
					>
						{t('login')}
					</Button>
				</View>
			</Container>
		</Screen>
	)
}
