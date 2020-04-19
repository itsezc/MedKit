import React from 'react'
import { Screen } from '../../components'

type IRecipe = {
	preview: string
}

export const Recipe: React.FunctionComponent<IRecipe> = ({ children, preview }) => {
	return (
		<Screen
			background='#F7F7F7'
			statusBar='#F7F7F7'
			statusBarColor='dark-content'
			backgroundImage={preview}
		>
			
		</Screen>
	)
}