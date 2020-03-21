import React from 'react'
import { TouchableWithoutFeedback, ScrollView, View, Text, Image } from 'react-native'
import Styled from 'styled-components/native'

import quickActions from '../../../assets/data/quickActions'
import { useTranslation } from 'react-i18next'

const MiniCardContainer = Styled.View`
	background-color: #FFFFFF;
	width: 145px;
	height: 130px;
	padding: 10px;
	margin: 10px 20px 0px 20px;
	border-radius: 10px;
	shadow-opacity: 0.1;
	shadow-offset: 0px 0px;
	shadow-radius: 3px;
	shadow-color: #000;
	elevation: 3;
	z-index: 3;
`

export function MiniCard({ link, image, name, navigation }): JSX.Element {

	const { t, i18n } = useTranslation()

	return (
		<TouchableWithoutFeedback
			onPress={() => link ? navigation.push(link) : null}
		>
			<View
				style={{
					display: 'flex',
					paddingVertical: 3
				}}
			>
				<View
					style={{
						backgroundColor: '#3BCCBB',
						height: 30,
						width: '65%',
						position: 'absolute',
						top: 0,
						left: 32,
						borderRadius: 10,
						opacity: 0.5,
						zIndex: 2
					}}
				/>
				<MiniCardContainer>
					<Image
						style={{ marginTop: 8, width: 55, height: 55, zIndex: 4 }}
						source={image}
					/>
					<Text
						adjustsFontSizeToFit
						allowFontScaling
						minimumFontScale={5}
						style={{ marginTop: 15, marginLeft: 2, fontSize: 20 }}
					>
						{t(name)}
					</Text>
				</MiniCardContainer>

			</View>
		</TouchableWithoutFeedback>
	)
}

export const MiniCards = (props) => (
	<View
		style={{
			width: '100%',
			marginTop: 118,
			zIndex: 3
		}}
	>
		<ScrollView
			horizontal
		>
			{
				quickActions.actions.map((action, index) =>
					<MiniCard
						key={index}
						name={action.name}
						image={action.image}
						link={action.link}
						navigation={props.navigation}
					/>
				)
			}
		</ScrollView>
	</View>
)