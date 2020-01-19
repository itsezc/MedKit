import React from 'react'
import { G, Path } from 'react-native-svg'
import SvgIcon from 'react-native-svg-icon'

import Colors from '../constants/Colors'

const svgs = {
	Heart2Line: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M2.821 12.794a6.5 6.5 0 0 1 7.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 0 1 9.193 9.192L12 22l-9.192-9.192.013-.014z' /></G>
}

export const Icon = (props) => {
	return(
		<SvgIcon
			name={props.name}
			fill={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
			width='26'
			height='26'
			viewBox='0 0 24 24'
			svgs={svgs}
		/>
	)
}


