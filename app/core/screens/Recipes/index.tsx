import React, { useState } from 'react'

import { View, Text } from 'react-native'
import { Screen, Icon, RecipesCard as Card } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'

export default function ({ navigation }): JSX.Element {
	return (
		<Screen
			background='#FFFFFF'
		>
			<View
				style={{
					marginTop: 30,
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
							color='#363946'
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
							color='#363946'
						/>
					</View>
					
					<View
						style={{
							marginLeft: 10
						}}
					>
						<Icon
							name='Heart2Line'
							size='24'
							color='#363946'
						/>
					</View>
					
				</View>			
			</View>

			<ScrollView
				horizontal
				style={{
					maxHeight: 250,
					marginTop: 30,
					marginHorizontal: 25,
				}}
			>
				<Card />
				<Card />
			</ScrollView>
		</Screen>
	)
}