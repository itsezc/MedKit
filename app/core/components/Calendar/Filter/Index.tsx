import React, { useState } from 'react'
import { TouchableWithoutFeedback, ScrollView, View, Text } from 'react-native'

import { FilterItem } from './Item'

export const Filter = (props) => {
	
	const [selected, setSelected] = useState(props.filters.findIndex(element => element.name === props.selected) || 0)

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
				props.filters.map(({ name, value, selected }: { name: string, value: string, selected: boolean }, index) => (
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
							/>

						</View>
					</TouchableWithoutFeedback>
				))
			}
		</ScrollView>
	)
	
}