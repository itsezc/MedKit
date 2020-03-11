import React from 'react'
import Style from 'styled-components/native'
import { View, ImageBackground } from 'react-native'

import RainGB from '../../assets/images/RainBG.svg'

// https://loading.io/pattern/m-rain
// background-image: url(${RainBG});

// export const Screen = Style.ImageBackground`
// 	flex: 1;
// 	background-color: #2276df;
// 	source: ${RainBG};
// 	width: 100%;
// `


export const Screen = ({ children }) => (
	<View>
		{/* <RainGB /> */}
		{children}
	</View>
)

