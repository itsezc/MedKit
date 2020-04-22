import * as React from 'react'

import {
	Screen,
	Calendar,
	MiniCards
} from '../../components'
import { View, Image, Text, TouchableWithoutFeedback, Dimensions } from 'react-native'

import { useQuery, gql } from '@apollo/client'
import { useTranslation } from 'react-i18next'

export default function ({ navigation }): JSX.Element {

	const { t, i18n } = useTranslation()

	const GET_USER = gql`
		{
			getUser {
				firstName
			}
		}
	`
	const { loading, error, data } = useQuery(GET_USER)
	
	if (data) {
		const { getUser: { firstName } } = data 
		return (
			<Screen animated>
				<View
					style={{
						flex: 1,
						marginLeft: 30,
						marginTop: 50,
					}}
				>
					<Text style={{ color: '#F5F7FD', fontSize: 24 }}>{t('hello')},</Text>
					<Text style={{ color: '#FFFFFF', fontSize: 34, fontWeight: 'bold' }}>{firstName}</Text>
					<TouchableWithoutFeedback
						onPress={() => navigation.navigate('Profile')}
					>
						<Image
							style={{ 
								width: 55, 
								height: 55, 
								borderRadius: 30,
								position: 'absolute',
								right: 30,
							}}
							source={{ uri: 'https://avatars2.githubusercontent.com/u/33750251?s=460&u=406522584630aeddd14e73f7ea3d5a45993b2cad&v=4'}}
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
						marginTop: 165,
					}}
				/>
				<MiniCards navigation={navigation} />
				<Calendar />
			</Screen>
		) 
	} else {
		return null
	}
	
}