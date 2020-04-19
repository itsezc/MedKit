import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Icon } from '../Icon'
import { Card } from './Card'
import { useQuery, gql } from '@apollo/client'

const GET_FEATURED_RECIPES = gql`
	{
		getRecipes {
			name
			preview
		}
	}
`

export function FeaturedRecipes() {
	const { data, error, loading } = useQuery(GET_FEATURED_RECIPES)

	return (
		<>
			<View
				style={{
					marginHorizontal: 25,
					flexDirection: 'row',
					alignItems: 'center',
					marginTop: 40
				}}
			>
				<Text
					style={{
						color: '#BCBDBE',
						fontFamily: 'circular-std',
						fontSize: 16
					}}
				>
					Featured
				</Text>

				<Text
					style={{
						marginLeft: 'auto',
						marginRight: 5,
						fontSize: 18,
						fontWeight: 'bold',
						color: '#E69C59'
					}}
				>All</Text>

				<Icon 
					name='ArrowRightLine'
					size='18'
					color='#E69C59'
				/>
			</View>

			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{
					maxHeight: 250,
					marginTop: 10,
					marginHorizontal: 25,
				}}
			>
				{data.getRecipes.map(({ name, preview }) => (
					<Card
						name={name}
						preview={preview}
						featured
					/>
				))}
			</ScrollView>
		</>
	)
}