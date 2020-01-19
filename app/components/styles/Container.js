import React from 'react'

import { StyleSheet, View } from 'react-native'
import Style from 'styled-components/native'

import RainBG from '../../assets/images/RainBG.svg'
// https://loading.io/pattern/m-rain

export const Container = Style.View`
	flex: 1;
	padding: 50px 0;
	justify-content: center;
	background-color: #2276df;
	background-image: url(${RainBG});
	align-items: center;
`

