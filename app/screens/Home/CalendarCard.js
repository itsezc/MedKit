import React from 'react'
import Styled from 'styled-components/native'

import { Icon } from '../../components/Icon'
import { View, Image, Text } from 'react-native'

const CalendarTime = Styled.View`
	border-radius: 12px;
	width: 60px;
	background-color: #DEEBFA;
	padding: 3px;
	flex-direction: row;
`

const CalendarTag = Styled.Text`
	padding: 3px;
	border-radius: 12px;
	background-color: #E0F7E2;
	margin: 5px;
	text-align: center;
	max-width: 70%;
	font-size: 10px;
`

const CalendarContainer = Styled.View`
	margin: ${props => props.timeless ? '29px' : '10px'} 20px 0px 0px;
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

export const CalendarCard = ({ timeless, time, tag}) => {
	return(
		<View>
			{ timeless ? 
				null :
				<CalendarTime>
					<Icon
						style={{ marginTop: 1, marginLeft: 5, marginRight: 3 }}
						name='ClockLine'
						color='#5B9DEA'
						size='12'
					/>
					<Text style={{ fontSize: 11, color: '#686B7E' }}>
						{time}
					</Text>
				</CalendarTime>
			}
			
			<CalendarContainer timeless={timeless}>
				<Image
					style={{ width: 65, height: 65, opacity: 0.4, marginLeft: 5 }}
					source='https://lh3.googleusercontent.com/mxYA2XnI-4eqO2FaqLDoGird7yERflxs4zmthWhIHVKfzbQJZr-ILx_Ea-Fu1vha5A'
				/>
				<Text style={{ fontSize: 16, fontWeight: '500', marginTop: 10, marginLeft: 5 }}>Omega 3</Text>
				<CalendarTag>{tag}</CalendarTag>
			</CalendarContainer>
		</View>
	)
}