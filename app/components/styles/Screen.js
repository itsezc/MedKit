import React from 'react'
import Style from 'styled-components/native'
import { View } from 'react-native'

import RainBG from '../../assets/images/RainBG.svg'
// https://loading.io/pattern/m-rain

export const Screen = Style.View`
	flex: 1;
	background-color: #2276df;
	background-image: url(${RainBG});
	width: 100%;
`

