import * as React from 'react'
import Styled from 'styled-components/native'

import { ImageBackground, Platform, StatusBar } from 'react-native'

const ScreenContainer = Styled.View`
	flex: 1;
	background-color: ${props => props.background || '#2276df'};
`

function Screen(props: {
	animated?: boolean,
	pattern?: boolean,
	background?: string,
	statusBar?: string,
	children: React.ReactElement | React.ReactElement[]
}) {
	return (
		<ScreenContainer
			background={props.background}
		>
			{Platform.OS === 'ios' && <StatusBar barStyle='light-content' backgroundColor={'transparent'} />}
			{Platform.OS === 'android' && <StatusBar barStyle='light-content' backgroundColor={props.statusBar || '#2276df'} />}
			{
				props.animated === true ? 
					<ImageBackground
						style={{width: '100%', height: '100%'}}
						source={require('../../../assets/images/RainBG.gif')}
					>
						{props.children}
					</ImageBackground> : props.pattern === true ? 
						<ImageBackground
							style={{width: '100%', height: '100%'}}
							source={require('../../../assets/images/bg_abstract_blue.jpg')}
						>
							{props.children}
						</ImageBackground>: props.children
			}
		</ScreenContainer>
	)
}


export { Screen }