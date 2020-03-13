import * as React from 'react'

import { View, Text, Image } from 'react-native'
import {
	Icon,
	Screen,
	ProfileBack as Back,
	ProfileCard as Card,
	ProfileList as List
} from '../../components'

export default function ({ navigation  }): JSX.Element {
	return (
		<Screen>
			<Back navigation={navigation} />
			<View
				style={{
					flex: 1,
					paddingTop: 190,
					width: '100%',
					alignItems: 'center',
					height: 'auto'
				}}
			>
				<View 
					style={{
						display: 'flex',
						backgroundColor: '#3BCCBB',
						height: 30,
						width: '70%',
						position: 'absolute',
						top: 85,
						borderRadius: 10,
						opacity: 1
					}}
				/>
				<Card
					style={{ 
						padding: 15,
						zIndex: 2,
						marginTop: -90
					}}
				>
					<View
						style={{ flexDirection: 'row' }}
					>
						<Image
							style={{ width: 50, height: 50, borderRadius: 25 }}
							source={{ uri: 'https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg' }}
						/>
						<Text
							style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 20, marginTop: 15 }}
						>
							Chiru Boggavarapu
						</Text>
						<View style={{ marginLeft: 'auto', marginTop: 5 }}>
							<Icon
								name='ArrowRightSLine'
								color='#2276DF'
								size='42'
							/>
						</View>
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
	
					<List 
						icon='Logout' 
						text='Sign Out' 
						textColor='red'
						navigation={navigation}
						link='Logout'
					/>

				</Card>

				<Text style={{ marginTop: 15, color: '#eee' }}>Made by I.W.A</Text>
				<Text style={{ color: '#eee' }}>Version 1.0.0</Text>
			</View>
		</Screen>
	)
}