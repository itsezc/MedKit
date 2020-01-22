import React from 'react'

import { Screen } from '../components/styles/Screen'
import { TouchableWithoutFeedback, Dimensions, View, Text, Button, Image } from 'react-native'

import Styled from 'styled-components/native'

export default (props) => {
	return(
		<Screen
			style={{
				padding: 0,
				maxHeight: 180
			}}
		>

			<View
				style={{
					flex: 1,
					marginLeft: 30,
					marginTop: 50,
				}}
			>
				<Text style={{ color: '#F5F7FD', fontSize: 24 }}>Hello,</Text>
				<Text style={{ color: '#FFFFFF', fontSize: 34, fontWeight: 'bold' }}>Chiru</Text>
				<TouchableWithoutFeedback
					onPress={() => props.navigation.push('Profile')}
				>
					<Image
						style={{ 
							width: 55, 
							height: 55, 
							borderRadius: 30,
							position: 'absolute',
							right: 30,
						}}
						source='https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'
					/>
				</TouchableWithoutFeedback>
			</View>

			<View
				style={{
					position: 'absolute',
					backgroundColor: 'transparent',
					borderStyle: 'solid',
					borderLeftWidth: Dimensions.get('window').width,
					borderRightWidth: 0,
					borderBottomWidth: 50,
					borderLeftColor: 'transparent',
					borderRightColor: 'transparent',
					borderBottomColor: '#fff',
					marginTop: 130,
				}}
			/>

			<View
				style={{
					width: '100%',
					height: '100%',
					backgroundColor: '#fff',
					marginTop: 150,
				}}	
			>
				<Text>
					Content
				</Text>
			</View>
		</Screen>
	)
}