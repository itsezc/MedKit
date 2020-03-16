import * as React from 'react'

const { useState } = React

import Moment from 'moment'

import { View, Text, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Icon } from '../Icon'

import { Filter } from './filter'
import { CalendarCard } from './card'
import { Action } from '../Home'

import { useQuery, gql, DocumentNode } from '@apollo/client'

export const Calendar = (props) => {

	const FETCH_ACTIVITIES = gql`
		{
			getActivities {
				name
				tag
				time
			}
		}
	`

	const [actionVisible, showAction] = React.useState(false)
	const [data, setData] = useState({
		days: [
			{
				date: "2020-02-01T00:00:00Z",
				activities: [
					{
						time: "2020-01-21T08:45:00Z",
						name: "Marijjuana",
						tag: "Medicine"
					},
					{
						time: "2020-01-21T08:45:00Z",
						name: "Running",
						tag: "Exercise"
					},
					{
						time: "2020-01-21T12:00:00Z",
						name: "Biryani",
						tag: "Cooking"
					},
					{
						time: "2020-01-21T13:00:00Z",
						name: "Pinkman",
						tag: "Doctor"
					},
				]
			},
			{
				date: "2020-02-02T00:00:00Z",
				activities: [
					{
						time: "2020-02-21T08:00:00Z",
						name: "Pinkman",
						tag: "Doctor"
					},
					{
						time: "2020-02-21T08:00:00Z",
						name: "Salad",
						tag: "Cooking"
					},
					{
						time: "2020-02-21T13:30:00Z",
						name: "White",
						tag: "Doctor"
					},
					{
						time: "2020-02-21T08:45:00Z",
						name: "Push Ups",
						tag: "Exercise"
					},
				]
			},
			{
				date: "2020-02-03T00:00:00Z",
				activities: [
					{
						time: "2020-03-21T08:00:00Z",
						name: "Pinkman",
						tag: "Doctor"
					},
					{
						time: "2020-03-21T13:30:00Z",
						name: "White",
						tag: "Doctor"
					},
					{
						time: "2020-03-21T08:45:00Z",
						name: "Push Ups",
						tag: "Exercise"
					},
				]
			},
			{
				date: "2020-02-04T00:00:00Z",
				activities: [
					{
						time: "2020-03-21T08:00:00Z",
						name: "Pinkman",
						tag: "Doctor"
					},
					{
						time: "2020-03-21T13:30:00Z",
						name: "White",
						tag: "Doctor"
					},
					{
						time: "2020-03-21T08:45:00Z",
						name: "Push Ups",
						tag: "Exercise"
					},
				]
			}
		]
	})

	const [currentDay, setDay] = useState(0)
	const [selectedFilter, setFilter] = useState('All')

	const [openModal, setModal] = useState(false)

	const reformatDate = (date: Date): string => arr = new Date(date).toString()
	const sortByDate = (a, b) => new Date(reformatDate(a.time)) - new Date(reformatDate(b.time))

	const handleFilterChange = (newFilter) => setFilter(newFilter)

	const calculateActivities = (day) => {
		const count = (selectedFilter === 'All' ? data.days[day].activities : data.days[day].activities.filter(activity => activity.tag === selectedFilter)).length
		return `${count > 0 ? count : 'No'} ${(count === 1 ? 'Activity' : 'Activities')}`
	}

	return(
		<>
			<Action
				visible={actionVisible}
				handleChange={showAction}
			/>
			<View
				style={{
					backgroundColor: '#F0F5FD',
					zIndex: 2,
					paddingTop: 98,
					top: -101,
				}}
			>
				<Filter
					selected={selectedFilter}
					filters={[
						{ name: 'all', value: 'All' },
						{ name: 'appointments', value: 'Doctor' },
						{ name: 'medication', value: 'Medicine' },
						{ name: 'exercise', value: 'Exercise' },
						{ name: 'cooking', value: 'Cooking' }
					]}
					handleFilterChange={handleFilterChange}
				/>
			</View>

			<View
				style={{
					backgroundColor: '#F0F5FD',
					zIndex: 2,
					top: -101,
				}}
			>
				<View
					style={{
						zIndex: 1,
						padding: 0,
						marginLeft: 20,
						marginTop: 15,
						borderStyle: 'dashed',
						borderLeftWidth: 2,
						borderTopWidth: 2,
						borderColor: '#D5E2F9',
						height: Dimensions.get('window').height - 400
					}}
				>
					<Icon
						style={{ position: 'absolute', left: -13, top: 35 }}
						name='CircleFill'
						color='#2056D0'
						size='24'
					/>
					<Text
						style={{
							marginLeft: 20,
							marginTop: 37,
							fontWeight: '500'
						}}
					>
						{
							Moment(data.days[currentDay].date).format('Do MMM')
						}
					</Text>
					<Text
						style={{
							marginLeft: 20,
							marginTop: 5,
							fontWeight: '500',
							fontSize: 12,
							color: '#A7A9AE'
						}}
					>
						{calculateActivities(currentDay)}
					</Text>

					<Icon
						style={{ position: 'absolute', left: -10, top: 230 }}
						name='CircleFill'
						color='#628BDB'
						size='18'
					/>
					<Text
						style={{
							marginLeft: 20,
							marginTop: 155,
							fontWeight: '500'
						}}
					>
						{
							Moment(data.days[currentDay + 1].date).format('Do MMM')
						}
					</Text>
					<Text
						style={{
							marginLeft: 20,
							marginTop: 5,
							fontWeight: '500',
							fontSize: 12,
							color: '#A7A9AE'
						}}
					>
						{calculateActivities(currentDay + 1)}
					</Text>

					<ScrollView
						style={{
							marginLeft: 120,
							marginTop: -265,
						}}
						onScroll={async ({ nativeEvent: { contentOffset } }) => setDay(Math.round(contentOffset.y / 189))}
						scrollEventThrottle={200}
					>
						{
							data.days.map(({ activities }, index) => {

								const displayActivities = (selectedFilter === 'All' ? activities : activities.filter(activity => activity.tag === selectedFilter)).sort(sortByDate)
								const marginBottom = index === (data.days.length - 1) ? 40 : 20

								return(
									<ScrollView
										key={index}
										style={{
											// padding: 10,
											marginBottom,
											height: 189
										}}
										horizontal
									>
									{
										
										displayActivities.map(({ name, time, tag }, index) => (
											<CalendarCard
												key={index}
												timeless={index !== 0 ? (displayActivities[index - 1].time === time ? true : false) : false} 
												time={Moment(time).format('hh:mm')}
												name={name}
												tag={tag}
												handleModal={showAction}
											/>
										))
									}
									</ScrollView>
									
								)
							})
						}
					</ScrollView>

				</View>
			</View>
		</>
	)
}