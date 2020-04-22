import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export const Option = ({ title, image, addToMessageBoard, messages }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				addToMessageBoard({
					_id: messages.length + 1,
					text: title,
					createdAt: new Date(),
					user: {
						_id: 1
					}
				})
			}}
			style={{
				backgroundColor: '#3BCCBB',
				marginVertical: 5,
				width: 200,
				borderRadius: 25
			}}
		>
			<Text
				
				style={{
					textAlign: 'center',
					color: '#FFFFFF',
					padding: 15
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	)
}