import React from 'react'
import { G, Path, Circle } from 'react-native-svg'
import SvgIcon from 'react-native-svg-icon'

import Colors from '../constants/Colors'

const svgs = {
	Heart2Line: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M2.821 12.794a6.5 6.5 0 0 1 7.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 0 1 9.193 9.192L12 22l-9.192-9.192.013-.014z' /></G>,
	ArrowLeftLine: <G><Path fill='none' d='M0 0h24v24H0z'/><Path d='M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z' /></G>,
	ArrowLeftSLine: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z' /></G>,
	ArrowRightSLine: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z' /></G>,
	Translate: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301 14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z' /></G>,
	NotificationLine: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z' /></G>,
	MapPinLine: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z' /></G>,
	LifeBuoy: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 15a4.987 4.987 0 0 1-1.828-.345l-2.236 2.237A7.963 7.963 0 0 0 12 20a7.963 7.963 0 0 0 4.064-1.108l-2.236-2.237A4.987 4.987 0 0 1 12 17zm-8-5c0 1.484.404 2.873 1.108 4.064l2.237-2.236A4.987 4.987 0 0 1 7 12c0-.645.122-1.261.345-1.828L5.108 7.936A7.963 7.963 0 0 0 4 12zm14.892-4.064l-2.237 2.236c.223.567.345 1.183.345 1.828s-.122 1.261-.345 1.828l2.237 2.236A7.963 7.963 0 0 0 20 12a7.963 7.963 0 0 0-1.108-4.064zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a7.963 7.963 0 0 0-4.064 1.108l2.236 2.237A4.987 4.987 0 0 1 12 7c.645 0 1.261.122 1.828.345l2.236-2.237A7.963 7.963 0 0 0 12 4z' /></G>,
	Logout: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M5 11h8v2H5v3l-5-4 5-4v3zm-1 7h2.708a8 8 0 1 0 0-12H4A9.985 9.985 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4z' /></G>,
	CircleFill: <G><Path fill='none' d='M0 0h24v24H0z' /><Circle cx='12' cy='12' r='10' /></G>,
	ClockLine: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z' /></G>,
	CloseLine: <G><Path fill='none' d='M0 0h24v24H0z' /><Path d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z' /></G>,
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


