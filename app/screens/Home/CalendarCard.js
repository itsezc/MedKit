import React from 'react'
import Styled from 'styled-components/native'

const CalendarTime = Styled.View`
	border-radius: 12px;
	width: 60px;
	background-color: #DEEBFA;
	padding: 3px;
	flex-direction: row;
`

const CalendarTag = Styled.Text`
	padding: 3px;
	border-radius: 12px;
	background-color: #E0F7E2;
	margin: 5px;
	text-align: center;
	max-width: 70%;
	font-size: 10px;
`

const CalendarContainer = Styled.View`
	margin: 10px 20px 0px 0px;
	border-radius: 10px;
	background-color: #FFFFFF;
	width: 125px;
	height: 140px;
	padding: 10px;
	shadow-opacity: 0.1;
	shadow-offset: 0px 0px;
	shadow-radius: 6px;
	shadow-color: #000;
`