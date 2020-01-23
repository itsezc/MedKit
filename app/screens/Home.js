import React from 'react'

import { Screen } from '../components/styles/Screen'

import { TouchableWithoutFeedback, ScrollView, Dimensions, View, Text, Button, Image } from 'react-native'
import { Icon } from '../components/Icon'

import { Filter } from './Home/Filter'
import { MiniCards } from './Home/MiniCard'

import Styled from 'styled-components/native'

const CalendarTime = Styled.View`
	border-radius: 12px;
	width: 60px;
	background-color: #DEEBFA;
	text-align: center;
	padding: 3px;
	flex-direction: row;
`

const CalendarCard = Styled.View`
	margin: 10px 20px 0px 0px;
	border-radius: 10px;
	background-color: #FFFFFF;
	width: 125px;
	height: 140px;
	padding: 10px;
	shadow-opacity: 0.1;
	shadow-offset: 0px 0px;
	shadow-radius: 6px;
	shadow-color: #000;
`


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
							
							<View>
								<CalendarTime>
									<Icon
										style={{ marginTop: 1, marginLeft: 5, marginRight: 5 }}
										name='ClockLine'
										color='#5B9DEA'
										size='12'
									/>
									<Text style={{ fontSize: 11, color: '#686B7E' }}>
										8:00
									</Text>
								</CalendarTime>
								<CalendarCard>
									<Image
										style={{ width: 65, height: 65, opacity: 0.4 }}
										source='https://lh3.googleusercontent.com/mxYA2XnI-4eqO2FaqLDoGird7yERflxs4zmthWhIHVKfzbQJZr-ILx_Ea-Fu1vha5A'
									/>
									<Text style={{ fontSize: 16, fontWeight: '500', marginTop: 15 }}>Omega 3</Text>
								</CalendarCard>
							</View>
						</ScrollView>
						
					</ScrollView>
					
				</View>
			</View>
		</Screen>
	)
}