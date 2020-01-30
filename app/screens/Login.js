import React, { useState } from 'react'

import { TextField } from 'react-native-material-textfield'

import { View, Text, TextInput, Button } from 'react-native'
import Styled from 'styled-components/native'

import { Screen } from '../components/styles/Screen'
import { Container } from '../components/styles/Container'

import { verifyAuth, errorHandler } from '../core/auth'

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

const initialState = {
	email: '',
	password: '',
	emailError: '',
	passwordError: ''
}

export default (props) => {

	const [{ email, password, emailError, passwordError }, setState] = useState(initialState)

	const [processLogin, { loading }] = useMutation(LOGIN_MUTATION, {
		onCompleted: async (data) => {

			await verifyAuth(data)

			setState({ ...initialState })

			props.navigation.push('Home')
						
		},
		onError: async (error) => errorHandler(error, setState)
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
						onChangeText={text => setState(prevState => ({ ...prevState, email: text }))}
						placeholder={'your@email.com'}
						placeholderTextColor='#FFFFFF'
						fontSize={30}
						textColor='#FFFFFF'
						baseColor='#5F87DF'
						error={emailError}
						errorColor='#FFFFFF'
					/>

					<TextField
						value={password}
						onChangeText={text => setState(prevState => ({ ...prevState, password: text }))}
						placeholder={'password'}
						placeholderTextColor='#FFFFFF'
						fontSize={30}
						textColor='#FFFFFF'
						baseColor='#5F87DF'
						error={passwordError}
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