import * as React from 'react'
import { View } from 'react-native'

import { Filter } from './Filter'
import { CalendarCard } from './Home/Card'

export default () => (
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
					<ScrollView
						style={{
							padding: 10,
						}}
						horizontal
					>
						<CalendarCard
							time='8:45'
							name='Ibuprofen'
							tag='Medicine'
						/>
						<CalendarCard
							timeless
							name='Push Ups'
							tag='Exercise'
						/>
						<CalendarCard
							time='12:00'
							name='Biryani'
							tag='Cooking'
						/>
					</ScrollView>

					<ScrollView
						style={{
							padding: 10,
						}}
						horizontal
					>
						<CalendarCard
							time='8:45'
							name='White'
							tag='Doctor'
						/>
						<CalendarCard
							time='12:00'
							name='Pinkman'
							tag='Doctor'
						/>
					</ScrollView>

				</ScrollView>

			</View>
		</View>
	</>
)