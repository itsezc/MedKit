import * as React from 'react'

import Styled from 'styled-components/native'
import { Icon } from '../../components/Icon'
import { View, Text, TouchableWithoutFeedback} from 'react-native'

const Container = Styled.View`
	width: 100px;
	padding: 40px 0px 0px 20px;
	justify-content: flex-start;
`

export function Back({ navigation }): JSX.Element {
	return (
		<Container>
			<TouchableWithoutFeedback
					onPress={() => navigation.navigate('Home')}
				>
					<View style={{ flexDirection: 'row' }}>
						<Icon
							name='ArrowLeftSLine'
							size='32'
							color='#FFFFFF'
						/>
						<Text
						style={{
							fontSize: 19, color: '#FFFFFF', marginTop: 3
						}}
						>
							Back
						</Text>
					</View>
				</TouchableWithoutFeedback>
		</Container>
	)
}