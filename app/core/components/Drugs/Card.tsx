import React from 'react'
import { Text, View, Image } from 'react-native'

export function Card({ name, type, navigation }) {
	return (
		<View
			style={{
				flexDirection: 'row',
				backgroundColor: '#FFFFFF',
				borderRadius: 15,
				padding: 15,
				alignItems: 'center',
				shadowColor: '#FFF',
				shadowOffset: { 
					width: 0,
					height: 0,
				},
				shadowRadius: 3,
				elevation: 3,
				marginBottom: 20,
			}}
		>
			<Image
				source={require('../../../assets/images/medicine.png')}
				style={{ width: 50, height: 50, opacity: 0.5 }}
			/>
			<Text
				style={{
					fontSize: 20,
					marginLeft: 20
				}}
			>
				{name}
			</Text>
			<View
				style={{
					marginLeft: 'auto',
					backgroundColor: '#F1ECFF',
					paddingVertical: 4,
					paddingHorizontal: 12,
					borderRadius: 10
				}}
			>
				<Text
					style={{
						fontSize: 12,
						textAlign: 'center'
					}}
				>
					{type}
				</Text>
			</View>
			
		</View>
	)
}