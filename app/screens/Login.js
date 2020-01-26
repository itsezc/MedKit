import React, { useState } from 'react'

import { View, Text, TextInput, Button } from 'react-native'
import Styled from 'styled-components/native'

import { Screen } from '../components/styles/Screen'
import { Container } from '../components/styles/Container'

import { useMutation, gql } from '@apollo/client'

const SubmitButton = Styled.Text`
	background-color: #34C5B3;
	color: #FFFFFF;
	text-align: center;
	padding: 15px 0px;
	border-radius: 50px;
	font-weight: bold;
	font-size: 16;
`

const LOGIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				id 
				email
			}
		}
	}
`

export default () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [processLogin, { loading, data }] = useMutation(LOGIN_MUTATION)

	data ? console.log(data) : null

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
					<TextInput 
						style={{ height: 60, width: '100%', borderColor: '#5F87DF', borderBottomWidth: 1, color: '#FFFFFF', fontSize: 30 }}
						value={email}
						onChangeText={text => setEmail(text)}
						placeholder={'your@email.com'}
						placeholderTextColor='#FFFFFF'
					/>

					<TextInput 
						style={{ marginTop: 20, height: 60, width: '100%', borderColor: '#5F87DF', borderBottomWidth: 1, color: '#FFFFFF', fontSize: 30 }}
						value={password}
						onChangeText={text => setPassword(text)}
						secureTextEntry
						placeholder={'password'}
						placeholderTextColor='#FFFFFF'
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