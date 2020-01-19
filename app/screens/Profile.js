import React from 'react'

import { Container } from '../components/styles/Container'
import { Card } from '../components/styles/Card'
import { CardTitle } from '../components/styles/CardTitle'

import { Switch } from 'react-native'

export default Profile = () => {
	return(
		<Container>
			<Card >
				<CardTitle >Card number 1</CardTitle>
			</Card>
			<Card >
				<CardTitle >Card number 2</CardTitle>
			</Card>
			<Card >
				<CardTitle >Card number 3</CardTitle>
			</Card>
		</Container>
	)
}

