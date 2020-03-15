import React from 'react'
import Styled from 'styled-components/native'

import { Icon } from '../Icon'
import { View, Image, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Action } from '../Home'

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
	margin: 7px 5px 5px 5px;
	text-align: center;
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

export const CalendarCard = ({ name, timeless, time, tag }) => {

	const [actionVisible, showAction] = React.useState(false)

	let image = ''
	let tagColor = ''

	switch (tag) {
		case 'Medicine':
			image = 'https://lh3.googleusercontent.com/mxYA2XnI-4eqO2FaqLDoGird7yERflxs4zmthWhIHVKfzbQJZr-ILx_Ea-Fu1vha5A'
			tagColor = '#F1ECFF'
		break
		
		case 'Exercise':
			image = 'https://cdn3.iconfinder.com/data/icons/round-icons-vol-1-2/120/weight-512.png'
			tagColor = '#E0F7E2'
		break

		case 'Cooking':
			image = 'https://cdn3.iconfinder.com/data/icons/colored-simple-circle-volume-08-fruit/128/plainicon.com_55256_vec_svg_f509-512.png'
			tagColor = '#EFBEB6'
		break

		case 'Doctor':
			image = 'http://getdrawings.com/free-icon/female-doctor-icon-58.png'
			tagColor = '#51E1EA'
		break

		default:
			break;
	}

	return (
		<View>
			{timeless ? 
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
			
			{
				actionVisible ?
					<Action
						visible={actionVisible}
						handleChange={showAction}
					/> : null
			}

			<TouchableWithoutFeedback
				onPress={() => showAction(true)}
			>
				<CalendarContainer timeless={timeless}>
					<Image
						style={{ width: 65, height: 65, opacity: 0.4, marginLeft: 5 }}
						source={{ uri: image }}
					/>
					<Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10, marginLeft: 5 }}>{name}</Text>
					<CalendarTag style={{ backgroundColor: tagColor }} >{tag}</CalendarTag>
				</CalendarContainer>
			</TouchableWithoutFeedback>
		</View>
	)
}