import React, { useState } from 'react'
import { TouchableWithoutFeedback, ScrollView, View, Text } from 'react-native'

import { FilterItem } from './item'

export const Filter = (props) => {
	
	const [selected, setSelected] = useState(/* props.filters.findIndex(element => element.name === props.selected) || */ 0)
	const maxValue = props.filters.length - 1
	
	return(
		<ScrollView
			style={{
				width: '100%',
				maxHeight: 60,
				paddingBottom: 10,
				paddingLeft: 20,
				paddingRight: 20,
				marginTop: 25
			}}
			horizontal
		>
			{
				props.filters.map(({ name, value  }: { name: string, value: string }, index: number) => (
					<TouchableWithoutFeedback
						key={index}
						onPress={() => {
							setSelected(index)
							props.handleFilterChange(value)
						}}
					>
						<View onStartShouldSetResponder={() => true}>

							<FilterItem
								name={name}
								selected={index === selected ? true : false}
								last={index === maxValue ? true : false}
							/>

						</View>
					</TouchableWithoutFeedback>
				))
			}
		</ScrollView>
	)
	
}