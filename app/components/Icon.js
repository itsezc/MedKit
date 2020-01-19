import React from 'react'
import { G, Path } from 'react-native-svg'
import SvgIcon from 'react-native-svg-icon'

import Colors from '../constants/Colors'

const svgs = {
	Heart2Line: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M2.821 12.794a6.5 6.5 0 0 1 7.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 0 1 9.193 9.192L12 22l-9.192-9.192.013-.014z' /></G>,
	ArrowLeftSLine: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z' /></G>,
	ArrowRightSLine: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z' /></G>
}

export const Icon = (props) => {
	return(
		<SvgIcon
			name={props.name}
			fill={
				props.color ? props.color : props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
			}
			width={props.size ? props.size : '26'}
			height={props.size ? props.size : '26'}
			viewBox='0 0 24 24'
			svgs={svgs}
		/>
	)
}


