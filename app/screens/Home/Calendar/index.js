import * as React from 'react'

import Moment from 'moment'

import { View, Text, Dimensions, ScrollView } from 'react-native'
import { Icon } from '../../../components/Icon'

import { Filter } from './Filter'
import { CalendarCard } from './Card'

export const Calendar = (props) => {

	const data = {
		days: [
			{
				date: "2020-01-21T00:00:00Z",
				activities: [
					{
						time: "2020-01-21T08:45:00Z",
						name: "Ibuprofen",
						tag: "Medicine"
					},
					{
						time: "2020-01-21T12:00:00Z",
						name: "Biryani",
						tag: "Cooking"
					},
					{
						time: "2020-01-21T08:45:00Z",
						name: "Push Ups",
						tag: "Exercise"
					},
				]
			},
			{
				date: "2020-02-21T00:00:00Z",
				activities: [
					{
						time: "2020-02-21T08:00:00Z",
						name: "White",
						tag: "Doctor"
					},
					{
						time: "2020-02-21T13:30:00Z",
						name: "Pinkman",
						tag: "Doctor"
					},
				]
			}
		]
	}

	const reformatDate = (date) => arr = new Date(date).toString()
	const sortByDate = (a, b) => new Date(reformatDate(a.time)) - new Date(reformatDate(b.time))

	return(
		<>
			<View
				style={{
					backgroundColor: '#F0F5FD',
					zIndex: 2,
					paddingTop: 50,
					top: -50,
				}}

				wrapper
			>
				<Filter
					filters={[
						{ name: 'All' },
						{ name: 'Appointments' },
						{ name: 'Medication' },
						{ name: 'Exercise' },
						{ name: 'Cooking' }
					]}
				/>
			</View>

			<View
				style={{
					backgroundColor: '#F0F5FD',
					zIndex: 2,
					top: -50,
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
						height: Dimensions.get('window').height - 410
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
						Today
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
						3 Activites
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
						24 Jan
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
						1 Activity
					</Text>

					<ScrollView
						style={{
							marginLeft: 120,
							marginTop: -265,
						}}
					>
						{
							data.days.map(({ activities }, index) => {

								const displayActivites = activities.sort(sortByDate)

								return(
								
								<ScrollView
									key={index}
									style={{
										padding: 10,
									}}
									horizontal
								>
									{
										
										displayActivites.map(({ name, time, tag }, index) => (
										
											<CalendarCard
												key={index}
												time={Moment(time).format('hh:mm')}
												name={name}
												tag={tag}
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