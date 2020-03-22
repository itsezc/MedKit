import React, { useState } from 'react'

import { View, Text, TextInput, Image } from 'react-native'
import { Icon, Screen, ProfileBack as Back, DrugsCard as Card } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default function({ navigation }) {
	
	const [products, setProducts] = useState([
		{
			name: "Paracetamol",
			type: "counter"
		},
		{
			name: "Ibuprofen",
			type: "counter"
		},
		{
			name: "Aspirin",
			type: "prescription"
		},
		{
			name: "Vicodin",
			type: "prescription"
		},
		{
			name: "Azithromycin",
			type: "prescription"
		},
		{
			name: "Guaifenesin",
			type: "counter"
		},
		{
			name: "Loratadine",
			type: "counter"
		},
		{
			name: "Benadryl",
			type: "counter"
		}
	])

	const [count, setCount] = useState(0)
	
	return (
		<Screen
			pattern
		>
			<Back navigation={navigation} />
			<View
				style={{
					paddingTop: 15,
					paddingHorizontal: 30,
					flexDirection: 'row',
					alignItems: 'flex-start'
				}}
			>
				<Text
					style={{
						color: '#FFFFFF',
						fontSize: 34,
						fontWeight: 'bold'
					}}
				>
					Choose Drugs
				</Text>
				<View
					style={{
						backgroundColor: '#3BCCBB',
						borderRadius: 50,
						width: 32,
						height: 32,
						marginLeft: 20,
						marginTop: 10,
						justifyContent: 'center'
					}}
				>
					<Text
						style={{
							color: '#FFFFFF',
							fontSize: 14,
							fontWeight: 'bold',
							textAlign: 'center'
						}}
					>
						{count}
					</Text>
				</View>
			</View>
			<View
				style={{
					marginTop: 40,
					paddingHorizontal: 30,
				}}
			>
				<View
					style={{
						position: 'absolute',
						marginLeft: 40,
						marginTop: 14,
						zIndex: 3
					}}
				>
					<Icon 
						name='Search'
						size='22'
						color='#DDDDDD'
					/>
				</View>
				<TextInput
					style={{
						height: 50,
						backgroundColor: '#FFFFFF',
						borderRadius: 15,
						paddingLeft: 40
					}}
					placeholder='Search for a Drug'
				/>
			</View>

			<ScrollView
				style={{
					marginTop: 40,
					marginHorizontal: 20,
				}}
			>
				{
					products.map(({ name, type }, index) => (
						<Card 
							key={index}
							name={name}
							type={type}
							navigation={navigation}
							countHandler={setCount}
						/>
					))
				}
			</ScrollView>
		</Screen>
	)
}