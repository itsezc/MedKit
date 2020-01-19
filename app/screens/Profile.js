import React from 'react'

import { Screen } from '../components/styles/Screen'
import { Container } from '../components/styles/Container'
import { Card } from '../components/styles/Card'
import { CardTitle } from '../components/styles/CardTitle'

import { View, Text } from 'react-native'
import Styled from 'styled-components/native'

const Back = Styled.View`
	padding: 40px 0px 0px 20px;
	justify-content: flex-start;
`

import { Icon } from '../components/Icon'


export default Profile = () => {
	return(
		<Screen>
		
			<Back>
				<View style={{ flexDirection: 'row' }}>
					<Icon
						name='ArrowLeftSLine'
						size='36'
						color='#FFFFFF'
					/>
					<Text style={{ fontSize: '1.5em', color: '#FFFFFF', marginTop: '3px' }}>
						Back
					</Text>
				</View>
			</Back>
				
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
		</Screen>
	)
}

