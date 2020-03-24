import React from 'react'

import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { Icon } from '../Icon'

export function Header({ navigation }): JSX.Element {
	return (
		<View 
			style={{
				height: 65,
				flexDirection: 'row',
				alignItems: 'center',
				paddingHorizontal: 20,
				shadowColor: '#000',
				shadowOpacity: 0.25,
				shadowOffset: {
					width: 0,
					height: 0
				},
				shadowRadius: 5,
				elevation: 5,
				backgroundColor: '#2B8FFF',
				zIndex: 3
			}}	
		>
			<TouchableWithoutFeedback
				onPress={() => navigation.navigate('Home')}
			>
				<View>
					<Icon
						name='ArrowLeftLine'
						color='#FFFFFF'
						size='26'
					/>
				</View>
			</TouchableWithoutFeedback>

			<View
				style={{
					flex: 1
				}}
			>
				<Text
					style={{
						color: '#FFFFFF',
						width: '100%',
						textAlign: 'center',
						fontSize: 15
					}}
				>
					Dr. Robot
				</Text>
				<Text
					style={{
						color: '#FFFFFF',
						textAlign: 'center',
						fontSize: 12,
						marginTop: 5
					}}
				>
					15K people like me
				</Text>
			</View>

			<Icon
				name='CloseLine'
				color='#FFFFFF'
				size='26'
			/>
		</View>
	)
}