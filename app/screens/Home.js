import React from 'react'
import { useTranslation } from 'react-i18next'

import { Screen } from '../components/styles/Screen'

import { TouchableWithoutFeedback, Dimensions, View, Text, Image } from 'react-native'

import { Calendar } from './Home/Calendar'
import { MiniCards } from './Home/MiniCard'

export default (props) => {

	const [ t, i18n ] = useTranslation()

	return(
		<Screen
			style={{
				padding: 0,
				maxHeight: 270
			}}
		>

			<View
				style={{
					flex: 1,
					marginLeft: 30,
					marginTop: 50,
				}}
			>
				<Text style={{ color: '#F5F7FD', fontSize: 24 }}>{t('Hello')},</Text>
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
					borderBottomColor: '#F0F5FD',
					marginTop: 220,
				}}
			/>

			<MiniCards 
				navigation={props.navigation}
			/>
			
			<Calendar />
			
		</Screen>
	)
}