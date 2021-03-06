import * as React from 'react'
import Styled from 'styled-components/native'

import { ImageBackground, StatusBar } from 'react-native'

const ScreenContainer = Styled.View`
	flex: 1;
	background-color: ${props => props.background || '#2276df'};
`

function Screen(props: {
	animated?: boolean,
	pattern?: boolean,
	background?: string,
	backgroundImage?: string,
	statusBar?: string,
	statusBarColor?: 'light-content' | 'dark-content',
	children: React.ReactElement | React.ReactElement[]
}) {
	return (
		<ScreenContainer
			background={props.background}
		>
			<StatusBar
				translucent
				barStyle={props.statusBarColor || 'light-content'} backgroundColor='transparent' />
			{
				props.animated === true ? 
					<ImageBackground
						style={{
							width: '100%', height: '100%',
						}}
						source={require('../../../assets/images/RainBG.gif')}
					>
						{props.children}
					</ImageBackground> : props.pattern === true ? 
						<ImageBackground
							style={{
								width: '100%', height: '100%',
							}}
							source={require('../../../assets/images/bg_abstract_blue.jpg')}
						>
							{props.children}
						</ImageBackground>: props.backgroundImage ? 
						<ImageBackground
							style={{
								width: '100%', height: '100%'
							}}
							source={{ uri: props.backgroundImage}}
						>
							{props.children}
						</ImageBackground>: props.children
			}
		</ScreenContainer>
	)
}


export { Screen }