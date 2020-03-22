import React, { useState } from 'react'
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'

export function Card({ name, type, navigation, countHandler }) {

	const [selected, setSelected] = useState(false)

	let backgroundColor: string

	switch (type) {
		case 'counter':
			backgroundColor = '#F1ECFF'
			break;
		case 'prescription':
			backgroundColor = '#E0F7E2'
		default:
			break;
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				setSelected(!selected)
				if (selected === true) countHandler(prevCount => prevCount - 1)
				else  countHandler(prevCount => prevCount + 1)
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					paddingHorizontal: 10
				}}
			>
				{
					selected ? 
						<View
							style={{
								paddingVertical: 15,
								backgroundColor: '#2460D7',
								width: 12,
								height: 60,
								marginRight: 10,
								marginTop: 10,
								borderRadius: 20,
								shadowColor: '#000',
								shadowOffset: { 
									width: 0,
									height: 0,
								},
								shadowRadius: 3,
								elevation: 3,
								marginBottom: 20,
							}}
						/> : null
				}
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						backgroundColor: '#FFFFFF',
						borderRadius: 15,
						padding: 15,
						alignItems: 'center',
						shadowColor: '#000',
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
							backgroundColor,
							paddingVertical: 4,
							paddingHorizontal: 12,
							borderRadius: 10
						}}
					>
						<Text
							style={{
								fontSize: 10,
								textAlign: 'center'
							}}
						>
							{type.toUpperCase()}
						</Text>
					</View>
					
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}