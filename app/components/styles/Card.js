import React from 'react'

import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import Switch from '../Switch'
import { Icon } from '../Icon'

import Style from 'styled-components/native'


export const Card = Style.View`
	border: 1px solid #ccc;
	margin: 2px 0;
	border-radius: 10px;
	background-color: #FFFFFF;
	width: 80%;
	padding: 10px;
`

export const List = (props) => (
	<TouchableWithoutFeedback
			accessibilityRole='link'
			onPress={() => props.switch ? null : props.navigation.push(props.link)}
	>
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
	</TouchableWithoutFeedback>
)