import React from 'react'
import { StyleSheet, View } from 'react-native'
import Style from 'styled-components/native'

export const Card = Style.View`
	flex: 1;
	border: 1px solid #ccc;
	margin: 2px 0;
	border-radius: 10px;
	box-shadow: 0 0 10px #ccc;
	background-color: #fff;
	width: 80%;
	padding: 10px;
`