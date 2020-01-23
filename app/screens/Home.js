import React from 'react'

import { Screen } from '../components/styles/Screen'

import { TouchableWithoutFeedback, ScrollView, Dimensions, View, Text, Button, Image } from 'react-native'
import { Icon } from '../components/Icon'

import { Filter } from './Home/Filter'
import { MiniCards } from './Home/MiniCard'

import Styled from 'styled-components/native'

import { CalendarCard } from './Home/CalendarCard'

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
					borderBottomColor: '#F0F5FD',
					marginTop: 220,
				}}
			/>

			<MiniCards 
				navigation={props.navigation}
			/>
			

			<View
				style={{
					backgroundColor: '#F0F5FD',
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
					backgroundColor: '#F0F5FD',
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
						borderColor: '#D5E2F9',
						height: Dimensions.get('window').height - 410
					}}
				>
					<Icon
						style={{ position: 'absolute', left: -13, top: 35 }}
						name='CircleFill'
						color='#2056D0'
						size='24'
					/>
					<Text
						style={{
							marginLeft: 20,
							marginTop: 37,
							fontWeight: '500'
						}}
					>
						Today				
					</Text>
					<Text
						style={{
							marginLeft: 20,
							marginTop: 5,
							fontWeight: '500',
							fontSize: 12,
							color: '#A7A9AE'
						}}
					>
						3 Activites			
					</Text>

					<Icon
						style={{ position: 'absolute', left: -10, top: 195 }}
						name='CircleFill'
						color='#628BDB'
						size='18'
					/>
					<Text
						style={{
							marginLeft: 20,
							marginTop: 120,
							fontWeight: '500'
						}}
					>
						24 Jan				
					</Text>
					<Text
						style={{
							marginLeft: 20,
							marginTop: 5,
							fontWeight: '500',
							fontSize: 12,
							color: '#A7A9AE'
						}}
					>
						1 Activity		
					</Text>

					<ScrollView
						style={{
							marginLeft: 120,
							marginTop: -230,
						}}
					>
						<ScrollView
							style={{
								padding: 10,
							}}
							horizontal
						>
							<CalendarCard
								time='8:45'
								tag='Medicine'
							/>
							<CalendarCard 
								timeless
								tag='Exercise'
							/>
							<CalendarCard 
								time='12:00'
								tag='Cooking'							
							/>
						</ScrollView>
						
					</ScrollView>
					
				</View>
			</View>
		</Screen>
	)
}