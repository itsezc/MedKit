import React from 'react'
import { G, Path } from 'react-native-svg'
import SvgIcon from 'react-native-svg-icon'

import Colors from '../constants/Colors'

const svgs = {
	Heart2Line: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M2.821 12.794a6.5 6.5 0 0 1 7.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 0 1 9.193 9.192L12 22l-9.192-9.192.013-.014z' /></G>,
	ArrowLeftSLine: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z' /></G>,
	ArrowRightSLine: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z' /></G>,
	Translate: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301 14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z' /></G>,
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
			style={props.style}
		/>
	)
}


