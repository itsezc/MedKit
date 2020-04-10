import React, { useState } from 'react'

import Moment from 'moment'

import { View, Text, Dimensions, ScrollView } from 'react-native'
import { Icon } from '../Icon'

import { Filter } from './Filter'
import { CalendarCard } from './Card'
import { Action } from '../Home'

import { useQuery, gql } from '@apollo/client'

export const Calendar = (props) => {

	const [actionVisible, showAction] = useState(false)
	const [currentDay, setDay] = useState(0)
	const [selectedFilter, setFilter] = useState('All')


	const FETCH_ACTIVITIES = gql`
		query getAccountActivities {
			getActivities {
				date
				activities {
					name
					tag
					time
				}
			}
		}
	`

	const { loading, error, data } = useQuery(FETCH_ACTIVITIES)
	
	if (data) {

		const { getActivities } = data
		const days = getActivities

		const handleFilterChange = (newFilter) => setFilter(newFilter)

		const calculateActivities = (day) => {
			let count = 0
			if (days[day].activities !== null) {
				count = (selectedFilter === 'All' ? days[day].activities : days[day].activities.filter(activity => activity.tag === selectedFilter)).length
			}
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
						paddingTop: 95,
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
							height: Dimensions.get('window').height - 370
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
								Moment(days[currentDay].date).format('Do MMM')
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
								Moment(days[currentDay + 1].date).format('Do MMM')
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
								days.map(({ activities }, index) => {
									
									if (activities !== null) {
										const displayActivities = (selectedFilter === 'All' ? activities : activities.filter(activity => activity.tag === selectedFilter)) 
									
										const marginBottom = index === (days.length - 1) ? 40 : 20
	
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
									} else {
										return (
											<View
												key={index}
												style={{
													height: 189,
													justifyContent: 'center', flex: 1
												}}
											>
												<Text
													style={{
														textAlign: 'center',
														justifyContent:'center',
													}}
												>No Activities</Text>
											</View>
										)
									}


								})
							}
						</ScrollView>
	
					</View>
				</View>
			</>
		)
	} else {
		return null
	}
	
}