import React, { useState } from 'react'

import { View, Text } from 'react-native'
import { Screen, Icon, RecipesCard as Card, FeaturedRecipes } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default function({ navigation }): JSX.Element {
	return (
		<Screen
			background='#F7F7F7'
			statusBar='#F7F7F7'
			statusBarColor='dark-content'
		>
			{/* Header */}
			<View
				style={{
					marginTop: 40,
					marginHorizontal: 25,
					flexDirection: 'row',
					alignItems: 'center'
				}}
			>
				<Text
					style={{
						fontSize: 30,
						fontFamily: 'circular-std'
					}}
				>
					Diet
				</Text>
				
				<View
					style={{
						marginLeft: 'auto',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<View
						style={{
							marginHorizontal: 10
						}}
					>
						<Icon
							name='Search'
							size='24'
							color='#AFB4C0'
						/>
					</View>

					<View
						style={{
							marginHorizontal: 10
						}}
					>
						<Icon
							name='Filter3'
							size='24'
							color='#AFB4C0'
						/>
					</View>
					
					<View
						style={{
							marginLeft: 10
						}}
					>
						<Icon
							name='Heart2Fill'
							size='24'
							color='#AFB4C0'
						/>
					</View>
					
				</View>			
			</View>
			{/* End Header */}

			{/* Planner */}
			<View
				style={{
					marginHorizontal: 25,
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: 20
				}}
			>
				<Text
					style={{
						color: '#BCBDBE',
						fontFamily: 'circular-std',
						fontSize: 16,
					}}
				>
					Daily Planner
				</Text>
			</View>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{
					maxHeight: 250,
					marginTop: 10,
					marginHorizontal: 25,
				}}
			>
				<Card 
					name='Breakfast'
					tag='Breakfast'
				/>
				<Card
					name='Lunch'
					tag='Lunch'
				/>
				<Card 
					name='Dinner'
					tag='Dinner'
				/>
			</ScrollView>
			{/* End Planner */}

			<FeaturedRecipes />

			<View
				style={{
					marginTop: 'auto',
					backgroundColor: '#FFFFFF',
					borderTopColor: '#F3F3F3',
					borderTopWidth: 2,
					paddingVertical: 15,
					paddingHorizontal: 25,
					flexDirection: 'row',
					justifyContent: 'space-evenly'
				}}
			>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Icon
						name='Home8Line'
						size='24'
						color='#AFB4C0'
					/>
					<Text
						style={{
							fontSize: 8
						}}
					>Home</Text>
				</View>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Icon
						name='Home8Line'
						size='24'
						color='#AFB4C0'
					/>
					<Text
						style={{
							fontSize: 8
						}}
					>Home</Text>
				</View>
			</View>
		</Screen>
	)
}
