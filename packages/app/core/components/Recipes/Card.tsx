import React from 'react'

import { View, Text, ImageBackground } from 'react-native'
import { Icon } from '../../components/Icon'

export function Card(
	{
		name,
		favorite,
		featured,
		preview,
		tag
	}: 
	{
		name: string,
		favorite?: boolean,
		featured?: boolean,
		preview?: string,
		tag?: string
	}
): JSX.Element {
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
					uri: preview ? preview : 'https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/04/sheet-pan-dinners.jpg'
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
				{
					tag ?
					(
						<View
							style={{
								marginBottom: 'auto',
								marginLeft: 'auto',
								paddingVertical: 5,
								paddingHorizontal: 10,
								backgroundColor: '#FFFFFF',
								borderBottomLeftRadius: 10,
								borderTopRightRadius: 10
							}}
						>
							<Text
								style={{
									color: '#E69C59',
									fontWeight: 'bold'
								}}
							>{tag}</Text>
						</View>
					): null
				}
				
				<View
					style={{
						backgroundColor: (featured === true ? 'rgba(116, 125, 139, 0.8)' : 'rgba(0, 0, 0, 0.5)'),
						opacity: 1,
						paddingHorizontal: 20,
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
							{name}
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
							name={ favorite ? 'Heart2Fill' : 'Heart2Line' }
							size='24'
							color={ favorite ? '#DA615D' : '#AFB4C0' }
						/>
					</View>
				</View>
			</ImageBackground>
		</View>
	)
}