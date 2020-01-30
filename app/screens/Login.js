import React, { useState } from 'react'

import { AsyncStorage as Storage } from 'react-native'

import { TextField } from 'react-native-material-textfield'

import { View, Text, TextInput, Button } from 'react-native'
import Styled from 'styled-components/native'

import { Screen } from '../components/styles/Screen'
import { Container } from '../components/styles/Container'

import { errorHandler } from '../core/auth/errorHandler'

import { useMutation, gql } from '@apollo/client'

const SubmitButton = Styled.Text`
	background-color: #34C5B3;
	color: #FFFFFF;
	text-align: center;
	padding: 15px 0px;
	border-radius: 50px;
	font-weight: bold;
	font-size: 16px;
`

const LOGIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
		}
	}
`

export default (props) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [displayEmailError, setEmailError] = useState('')
	const [displayPasswordError, setPasswordError] = useState('')

	const [processLogin, { loading, error }] = useMutation(LOGIN_MUTATION, {
		onCompleted: async (data) => {

			const { login } = data

			if (login) {
				const { token } = login

				try {
					await Storage.setItem('token', token)
					props.navigation.push('Home')
				} catch (e) {
					console.log('ERROR', e)
				}

				console.log('Token: ', await Storage.getItem('token'))
			}

			
		},
		onError: async (error) => errorHandler(error, setEmailError, setPasswordError)
	})

	return(
		<Screen
			style={{
				backgroundImage: null
			}}
		>
			<Container>
				<Text
					style={{ fontSize: 28, fontWeight: 'bold', color: '#FFFFFF' }}
				>
					Login to your Account
				</Text>

				<View
					style={{
						marginTop: 100
					}}
				>
					<TextField
						value={email}
						onChangeText={text => setEmail(text)}
						placeholder={'your@email.com'}
						placeholderTextColor='#FFFFFF'
						fontSize={30}
						textColor='#FFFFFF'
						baseColor='#5F87DF'
						error={displayEmailError}
						errorColor='#FFFFFF'
					/>

					<TextField
						value={password}
						onChangeText={text => setPassword(text)}
						placeholder={'password'}
						placeholderTextColor='#FFFFFF'
						fontSize={30}
						textColor='#FFFFFF'
						baseColor='#5F87DF'
						error={displayPasswordError}
						errorColor='#FFFFFF'
						secureTextEntry
					/>
				</View>

				<View 
					style={{
						flex: 1,
						justifyContent: 'flex-end',
					}}
				>
					<SubmitButton
						onPress={() => {
							processLogin({ variables: { email, password }})
						}}
					>
						Done
					</SubmitButton>
				</View>
			</Container>
		</Screen>
	)
}