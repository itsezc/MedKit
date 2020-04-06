import React from 'react'

import { Screen, Icon } from '../../components'
import { View, Text, TextInput, StatusBar } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ({ navigation }) {
	return (
		<>
			<StatusBar backgroundColor='#6E78F7' />
			<Screen
				background='#f5f5f5'
			>
				<View
					style={{
						backgroundColor: '#6E78F7',
						height: 150,
						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20,
						paddingHorizontal: 20,
						flexDirection: 'row',
						alignItems: 'center'
					}}
				>
					<TouchableWithoutFeedback
						onPress={() => navigation.navigate('Home')}
					>
						<Icon
							name='CloseLine'
							size={30}
							color='#ffffff'
						/>
					</TouchableWithoutFeedback>
					<Text
						style={{
							color: '#ffffff',
							fontSize: 16,
							fontWeight: 'bold',
							marginLeft: 10
						}}
					>
						Select your Symptoms
					</Text>
				</View>
				<View
					style={{
						marginTop: -30,
						paddingHorizontal: 30,
					}}
				>
					<View
						style={{
							position: 'absolute',
							marginLeft: 40,
							marginTop: 14,
							zIndex: 3
						}}
					>
						<Icon 
							name='Search'
							size='22'
							color='#000000'
						/>
					</View>
					<TextInput
						style={{
							height: 50,
							backgroundColor: '#FFFFFF',
							borderRadius: 40,
							paddingLeft: 40,
						}}
						placeholder='Search for a Drug'
					/>
				</View>
			</Screen>
		</>
	)
}