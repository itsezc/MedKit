import React, { useState } from 'react'

import { View, Text, TextInput } from 'react-native'
import Styled from 'styled-components/native'

import { Screen } from '../components/styles/Screen'
import { Container } from '../components/styles/Container'

export default () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

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
						style={{ height: 60, width: '100%', borderColor: '#5F87DF', borderBottomWidth: 1, color: '#FFFFFF', fontSize: 30 }}
						value={password}
						onChangeText={text => setEmail(password)}
						secureTextEntry
						placeholder={'password'}
						placeholderTextColor='#FFFFFF'
					/>
				</View>
			</Container>
		</Screen>
	)
}