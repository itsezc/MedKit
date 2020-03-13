import * as React from 'react'

import {
	Screen,
	Calendar,
	MiniCards,
	HomeAction
} from '../../components'
import { View, Image, Text, TouchableWithoutFeedback, Dimensions } from 'react-native'

import { useQuery, gql } from '@apollo/client'

export default function ({ navigation }): JSX.Element {

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
			<Screen>
				<View
					style={{
						flex: 1,
						marginLeft: 30,
						marginTop: 50,
					}}
				>
					<Text style={{ color: '#F5F7FD', fontSize: 24 }}>Hello,</Text>
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
							source={{ uri: 'https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'}}
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
						marginTop: 200,
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