import React, { useState } from 'react'
import { TouchableWithoutFeedback, ScrollView, View, Text } from 'react-native'

import Styled from 'styled-components/native'

const FilterContainer = Styled.View`
	border-radius: 5px;
	margin: 0 10px 0 0px;
	padding: 10px 20px;
	shadow-opacity: 0.15;
	shadow-offset: 0px 1px;
	shadow-radius: 5px;
	shadow-color: #000;
`

const FilterItem = (props) => (
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
			{props.name}
		</Text>
	</FilterContainer>
)

export const Filter = (props) => {
	
	const [selected, setSelected] = useState(0)

	return(
		<ScrollView
			style={{
				minWidth: '100%',
				maxHeight: 60,
				paddingTop: 10,
				paddingBottom: 10,
				paddingLeft: 20,
				paddingRight: 30,
				marginTop: 20
			}}
			horizontal
		>
			{
				props.filters.map((filter, index) => (
					<TouchableWithoutFeedback
						key={index}
						onPress={() => setSelected(index)}
					>
						<View onStartShouldSetResponder={() => true}>

							<FilterItem
								name={filter.name}
								selected={index === selected ? true : false}
							/>

						</View>
					</TouchableWithoutFeedback>
				))
			}
		</ScrollView>
	)
	
}