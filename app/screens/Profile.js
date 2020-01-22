import React from 'react'

import { Screen } from '../components/styles/Screen'
import { Container } from '../components/styles/Container'
import { Card, List } from '../components/styles/Card'
import { CardTitle } from '../components/styles/CardTitle'

import { View, TouchableWithoutFeedback, Text, Image, Button } from 'react-native'

import Styled from 'styled-components/native'

const Back = Styled.View`
	width: 100px;
	padding: 40px 0px 0px 20px;
	justify-content: flex-start;
`

import { Icon } from '../components/Icon'

export default Profile = (props) => {
	return(
		<Screen>
		
			<Back>
				<TouchableWithoutFeedback
					onPress={() => props.navigation.push('Home')}
				>
					<View style={{ flexDirection: 'row' }}>
						<Icon
							name='ArrowLeftSLine'
							size='32'
							color='#FFFFFF'
						/>
						<Text
							style={{ fontSize: '1.3em', color: '#FFFFFF', marginTop: '3px' }}
						>
							Back
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</Back>
				
			<Container>
				<View 
					style={{
						display: 'flex',
						backgroundColor: '#3BCCBB',
						height: '30px',
						width: '70%',
						position: 'absolute',
						top: 85,
						borderRadius: 10,
						opacity: 0.5
					}}
				/>
				<Card
					style={{ 
						padding: '15px',
						zIndex: 2,
						marginTop: 55
					}}
				>
					<View
						style={{ flexDirection: 'row', alignContent: 'center'  }}
					>
						<Image
							style={{ width: 50, height: 50, borderRadius: 25 }}
							source='https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'
						/>
						<Text
							style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '20px', marginTop: '15px' }}
						>
							Chiru Boggavarapu
						</Text>
						<Icon
							style={{ position: 'absolute', right: '0', top: '4' }}
							name='ArrowRightSLine'
							color='#2276DF'
							size='42'
						/>
					</View>
				</Card>


				<Card 
					style={{
						marginTop: 20
					}}
				>
					<List icon='Translate' text='Languages' />
					<List icon='MapPinLine' text='Location' switch />
					<List icon='NotificationLine' text='Notifications' switch />
				</Card>

				<Card 
					style={{
						marginTop: 20
					}}
				>
					<List icon='LifeBuoy' text='Help' textColor='red' />
					<List icon='Logout' text='Sign Out' textColor='red' />
				</Card>

				<Text style={{ marginTop: 15, color: '#eee' }}>Made by I.W.A</Text>
				<Text style={{ color: '#eee' }}>Version 1.0.0</Text>
			</Container>
		</Screen>
	)
}

