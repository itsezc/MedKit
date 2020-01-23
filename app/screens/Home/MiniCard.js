import React from 'react'
import { TouchableWithoutFeedback, ScrollView, View, Text, Image} from 'react-native'
import Styled from 'styled-components/native'

import quickActions from '../../assets/data/quickActions.json'

const MiniCardContainer = Styled.View`
	margin: 10px 20px 0px 20px;
	border-radius: 10px;
	background-color: #FFFFFF;
	width: 80%;
	padding: 10px;
	width: 145px;
	height: 130px;
	shadow-opacity: 0.1;
	shadow-offset: 0px 0px;
	shadow-radius: 6px;
	shadow-color: #000;
`

export const MiniCard = (props) => (
	<TouchableWithoutFeedback
		onPress={() => props.link ? props.navigation.push(props.link) : null}
	>
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
			<MiniCardContainer>
				<Image
					style={{ marginTop: 8, width: 55, height: 55, zIndex: 4 }}
					source={props.image}
				/>
				<Text
					style={{ marginTop: 15, marginLeft: 2, fontSize: 20 }}
				>
					{props.name}
				</Text>
			</MiniCardContainer>

		</View>
	</TouchableWithoutFeedback>
)

export const MiniCards = (props) => (
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
						link={action.link}
						navigation={props.navigation}
					/>
				)
			}
		</ScrollView>
	</View>
)