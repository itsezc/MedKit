import * as React from 'react'
import Constants from 'expo-constants'
import Styled from 'styled-components/native'

const ScreenContainer = Styled.View`
	flex: 1;
	background-color: #2276df;
	paddingTop: ${Constants.statusBarHeight}px;
`

function Screen(props: {
	animated?: boolean, children: React.ReactElement | React.ReactElement[]}) {
	return (
		<ScreenContainer>
			{props.children}
		</ScreenContainer>
	)
}


export { Screen }