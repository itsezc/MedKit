import React from 'react'

import { View, Text, Image, ImageBackground } from 'react-native'
import { Icon } from '../../components/Icon'

export function Card(): JSX.Element {
	return (
		<View
			style={{
				flex: 1,
				width: 350,
				height: 250,
				marginRight: 10
			}}
		>
			<ImageBackground
				source={{
					uri: 'https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/04/sheet-pan-dinners.jpg'
				}}
				imageStyle={{ borderRadius: 15 }}
				style={{
					width: '100%',
					height: '100%',
					borderRadius: 10,
					flex: 1,
					justifyContent: 'flex-end'
				}}
			>
				<View
					style={{
						backgroundColor: 'rgba(52, 52, 52, 0.8)',
						opacity: 1,
						paddingHorizontal: 10,
						paddingVertical: 10,
						borderBottomLeftRadius: 15,
						borderBottomRightRadius: 15,
						flexDirection: 'row',
						alignItems: 'center'	
					}}
				>
					<View
						style={{
							width: '85%'
						}}
					>
						<Text
							style={{
								color: '#FFFFFF',
								overflow: 'scroll'
							}}
						>
							Program for gaining muscle mass
							
						</Text>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<Icon 
								name='ClockLine'
								size='13'
								color='#FFFFFF'
								style={{
									marginRight: 5
								}}
							/>
							<Text
								style={{
									color: '#FFFFFF',
								}}
							>
								10 Days
							</Text>
						</View>
					</View>
					<View
						style={{
							backgroundColor: '#FFFFFF',
							borderRadius: 50,
							padding: 10,
							marginRight: 10
						}}
					>
						<Icon 
							name='Heart2Line'
							size='24'
							color='#363946'
						/>
					</View>
				</View>
			</ImageBackground>
		</View>
	)
}