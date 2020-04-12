import React, { useState } from 'react'

import { useTranslation } from 'react-i18next'
import { TouchableWithoutFeedback, ScrollView, View, Text } from 'react-native'

import { FilterItem } from './Item'

export const Filter = (props) => {
	
	const [ t, i18next ] = useTranslation()
	const [selected, setSelected] = useState(/* props.filters.findIndex(element => element.name === props.selected) || */ 0)
	
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
						<View
							style={{
								paddingVertical: 2
							}}
							onStartShouldSetResponder={() => true}>

							<FilterItem
								name={t(name)}
								selected={index === selected ? true : false}
								last={index === (props.filters.length - 1) ? true : false}
							/>

						</View>
					</TouchableWithoutFeedback>
				))
			}
		</ScrollView>
	)
	
}