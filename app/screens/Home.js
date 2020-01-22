import React from 'react'

import { Screen } from '../components/styles/Screen'

import { TouchableWithoutFeedback, ScrollView, Dimensions, View, Text, Button, Image } from 'react-native'

import { Filter } from './Home/Filter'

import quickActions from '../assets/data/quickActions.json'

import Styled from 'styled-components/native'

export const MiniCard = Styled.View`
	margin: 10px 20px 0px 20px;
	border-radius: 10px;
	background-color: #FFFFFF;
	width: 80%;
	padding: 10px;
	width: 145px;
	height: 130px;
	shadow-opacity: 0.5;
	shadow-offset: 0px -1px;
	shadow-radius: 6px;
	shadow-color: #000;
`



export const MinCardContainer = (props) => (
	<View
		style={{
			display: 'flex'
		}}
	>
		<View 
			style={{
				backgroundColor: '#3BCCBB',
				height: '30px',
				width: '65%',
				position: 'absolute',
				top: 0,
				left: 32,
				borderRadius: 10,
				opacity: 0.5
			}}
		/>
		<MiniCard>
			<Image
				style={{ width: 55, height: 55, zIndex: 4 }}
				source={props.image}
			/>
			<Text
				style={{ marginTop: 15, marginLeft: 2, fontSize: 20 }}
			>
				{props.name}
			</Text>
		</MiniCard>

	</View>
)

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
							<MinCardContainer
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
					minHeight: '110%'
				}}

				wrapper
			>
				<Filter />
			</View>

			<View
				style={{
					backgroundColor: '#E4EBFA',
					zIndex: 2,
					paddingTop: 50,
					top: -50,
					minHeight: '100%'

				}}
			>
			</View>
		</Screen>
	)
}