import * as React from 'react'
import Constants from 'expo-constants'
import Styled from 'styled-components/native'

import { ImageBackground, Image, Animated } from 'react-native'

const ScreenContainer = Styled.View`
	flex: 1;
	background-color: #2276df;
	paddingTop: ${Constants.statusBarHeight}px;
`

function Screen(props: {
	animated?: boolean, children: React.ReactElement | React.ReactElement[]}) {
	return (
		<ScreenContainer>
			
			{
				props.animated === true ? 
					<ImageBackground
						style={{width: '100%', height: '100%'}}
						source={require('../../../assets/images/RainBG.gif')}
					>
						{props.children}
					</ImageBackground> : props.children
			}
		</ScreenContainer>
	)
}


export { Screen }