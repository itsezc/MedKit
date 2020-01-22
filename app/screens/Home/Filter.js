import React from 'react'
import { ScrollView, Text } from 'react-native'

import Styled from 'styled-components/native'

const FilterContainer = Styled.View`
	border-radius: 5px;
	margin: 0 10px 0 0px;
	padding: 10px 20px;
`

export const Filter = (props) => (
	<ScrollView
		style={{
			minWidth: '100%',
			minHeight: '110%',
			paddingLeft: 20,
			paddingRight: 30
		}}
		horizontal
	>
		<FilterContainer
			style={{
				backgroundColor: props.selected ? '#2276DF' : '#FFFFFF'
			}}	
		>
			<Text
				style={{
					color: props.selected ? '#FFFFFF' : '#000000',
					fontWeight: props.selected ? 'bold' : 'normal'
				}}
			>
				{props.item}
			</Text>
		</FilterContainer>
	</ScrollView>
)
