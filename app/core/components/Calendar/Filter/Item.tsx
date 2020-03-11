import * as React from 'react'
import { Text } from 'react-native'

import { FilterContainer } from './Container'

function FilterItem({ name, selected }: { name: string, selected: boolean }): JSX.Element {
	return (
		<FilterContainer
			style={{
				backgroundColor: selected ? '#2276DF' : '#FFFFFF'
			}}
		>
			<Text
				style={{
					color: selected ? '#FFFFFF' : '#000000',
					fontWeight: selected ? 'bold' : 'normal'
				}}
			>
				{name}
			</Text>
		</FilterContainer>
	)
}

export { FilterItem }