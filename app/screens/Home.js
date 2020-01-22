import React from 'react'

import { Screen } from '../components/styles/Screen'

import { TouchableWithoutFeedback, ScrollView, Dimensions, View, Text, Button, Image } from 'react-native'

import { Filter } from './Home/Filter'
import { MiniCard } from './Home/MiniCard'

import quickActions from '../assets/data/quickActions.json'

import Styled from 'styled-components/native'


export default (props) => {
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
					borderBottomColor: '#E4EBFA',
					marginTop: 220,
				}}
			/>

			<View
				style={{
					width: '100%',
					marginTop: 130,
					zIndex: 3
				}}	
			>
				<ScrollView
					style={{
						minWidth: '100%',
						minHeight: '110%'
					}}
					horizontal
				>
					{
						quickActions.actions.map((action, index) => 
							<MiniCard
								key={index}
								name={action.name}
								image={action.image}
							/>
						)
					}
				</ScrollView>
			</View>

			<View
				style={{
					backgroundColor: '#E4EBFA',
					zIndex: 2,
					paddingTop: 50,
					top: -50,
				}}

				wrapper
			>
				<Filter 
					filters={[
						{ name: 'All'},
						{ name: 'Appointments' },
						{ name: 'Medication' },
						{ name: 'Exercise' },
						{ name: 'Cooking' }
					]}
				/>

				
			</View>

			<View
				style={{
					backgroundColor: '#E4EBFA',
					zIndex: 2,
					top: -50,
				}}
			>
				<View 
					style={{
						zIndex: 1,
						padding: 0,
						marginLeft: 20,
						marginTop: 15,
						borderStyle: 'dashed',
						borderLeftWidth: 2,
						borderTopWidth: 2,
						borderColor: '#C7DAF7',
						height: Dimensions.get('window').height - 410
					}}
				>
					<Text
						style={{
							marginLeft: 20,
							marginTop: 10
						}}
					>
						Calendar
					</Text>
				</View>
			</View>
		</Screen>
	)
}