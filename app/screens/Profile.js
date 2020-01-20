import React from 'react'

import { Screen } from '../components/styles/Screen'
import { Container } from '../components/styles/Container'
import { Card } from '../components/styles/Card'
import { CardTitle } from '../components/styles/CardTitle'

import { View, Text, Image } from 'react-native'
import Switch from '../components/Switch'
import Styled from 'styled-components/native'

const Back = Styled.View`
	padding: 40px 0px 0px 20px;
	justify-content: flex-start;
`

import { Icon } from '../components/Icon'

const List = (props) => (
	<View
		style={{
			flexDirection: 'row',
			margin: '10px'
		}}
	>
		<Icon 
			name={props.icon}
			style={{
				backgroundColor: '#2276DF',
				padding: 4,
				borderRadius: 4
			}}
			color='#FFFFFF'
			size='20'
		/>
		<Text
			style={{
				marginLeft: 20,
				marginTop: 3,
				color: props.textColor || '#000'
			}}
		>
			{props.text}
		</Text>
		<View
			style={{ position: 'absolute', right: '0', top: '4' }}
		>
		{
			props.switch ?
				<Switch
					value={true}
					activeText={''}
					inactiveText={''}
					activeBackgroundColor={'rgba(50, 163, 50, 1)'}
					inactiveBackgroundColor={'rgba(137, 137, 137, 1)'}
					activeButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
					inactiveButtonBackgroundColor={'rgba(255, 255, 255, 1)'}
					switchWidth={50}
					switchHeight={25}
					switchBorderRadius={20}
					switchBorderColor={'rgba(0, 0, 0, 1)'}
					switchBorderWidth={0}
					buttonWidth={20}
					buttonHeight={20}
					buttonBorderRadius={20}
					buttonBorderColor={'rgba(0, 0, 0, 1)'}
					buttonBorderWidth={0}
					animationTime={150}
					padding={true}
					onChangeValue={(value) => {
						console.log(value);
					}}
				/>
			:
				<Icon
					style={{ position: 'absolute', right: '0', top: '4' }}
					name='ArrowRightSLine'
					color='#2276DF'
					size='20'
				/>
		}
			
		</View>
	</View>
)


export default Profile = () => {
	return(
		<Screen>
		
			<Back>
				<View style={{ flexDirection: 'row' }}>
					<Icon
						name='ArrowLeftSLine'
						size='32'
						color='#FFFFFF'
					/>
					<Text style={{ fontSize: '1.3em', color: '#FFFFFF', marginTop: '3px' }}>
						Back
					</Text>
				</View>
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

