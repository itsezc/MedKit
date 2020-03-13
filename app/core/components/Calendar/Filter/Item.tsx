import * as React from 'react'
import { Text } from 'react-native'

import { FilterContainer } from './container'

function FilterItem({ name, selected, last }: { name: string, selected: boolean, last: boolean }): JSX.Element {

	return (
		<FilterContainer
			style={{
				backgroundColor: selected ? '#2276DF' : '#FFFFFF',
				marginRight: last ? 40 : 20
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