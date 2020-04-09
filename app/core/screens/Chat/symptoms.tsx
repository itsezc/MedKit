import React from 'react'

import { Screen, Icon } from '../../components'
import { View, Text, TextInput, ScrollView } from 'react-native'

import { useQuery, useLazyQuery, gql } from '@apollo/client'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'

const FETCH_SYMPTOMS = gql`
	query fetchSymptoms($current: [ID]) {
		getSymptoms(current: $current) {
			id
			name
		}
	}
`

const SEARCH_SYMPTOMS = gql`
	query searchSymptoms($name: String!) {
		getSymptom(name: $name) {
			id
			name
		}
	}
`

export default function ({ navigation }) {
	const [symptoms, setSymptoms] = React.useState([])
	const [current, setCurrent] = React.useState([])
	const [currentNames, setCurrentNames] = React.useState([])
	const [search, setSearch] = React.useState(null)

	const [searchQuery, searchProps] = useLazyQuery(SEARCH_SYMPTOMS, {
		onCompleted: (data) => {
			setSymptoms(data.getSymptom)
		}
	})

	const { loading, error, refetch, data } = useQuery(
		FETCH_SYMPTOMS,
		{ variables: { current }}
	)

	if (error) console.log(':::: ERROR - ', error)

	const updateList = (id: string) => {
		setCurrent(prev => [...prev, id])
	}

	React.useMemo(() => {
		refetch()
	}, [current, currentNames])

	React.useMemo(() => {
		if (data
			&& data.getSymptoms) setSymptoms(data.getSymptoms)
	}, [data])

	React.useMemo(() => {
		if (search === '')
			setSymptoms(data.getSymptoms)
		else if (search !== null || search !== '')
			searchQuery({ variables: { current, name: search } })
	}, [search])

	return (
		<Screen
			background='#EEEEEE'
			statusBar='#6E78F7'
		>
			<View
				style={{
					backgroundColor: '#6E78F7',
					height: 120,
					borderBottomLeftRadius: 25,
					borderBottomRightRadius: 25,
					paddingHorizontal: 20,
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<TouchableWithoutFeedback
					onPress={() => navigation.navigate('Home')}
				>
					<Icon
						name='ArrowLeftLine'
						size={30}
						color='#ffffff'
					/>
				</TouchableWithoutFeedback>
				<Text
					style={{
						color: '#ffffff',
						fontSize: 16,
						fontWeight: 'bold',
						marginLeft: 10,
						textAlign: 'center'
					}}
				>
					Select your Symptoms
				</Text>
			</View>
			<View
				style={{
					marginTop: -20,
					paddingHorizontal: 30,
				}}
			>
				<View
					style={{
						position: 'absolute',
						marginLeft: 40,
						marginTop: 14,
						zIndex: 3
					}}
				>
					<Icon 
						name='Search'
						size='22'
						color='#DDDDDD'
					/>
				</View>
				<TextInput
					style={{
						height: 50,
						backgroundColor: '#FFFFFF',
						borderRadius: 40,
						paddingLeft: 40,
						// shadowColor: '#000',
						// shadowOffset: {
						// 	height: 0,
						// 	width: 0
						// },
						// shadowOpacity: 0.25,
						// shadowRadius: 3,
						// elevation: 1,
					}}
					onChangeText={text => setSearch(text)}
					placeholder='Search Symptoms'
				/>
			</View>

			<View
				style={{
					borderRadius: 25,
					backgroundColor: '#ffffff',
					marginTop: 20,
					marginHorizontal: 20,
					height: 100,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				{
					current.length === 0 ? 
						(<Text
							style={{
								fontFamily: 'circular-std',
								fontSize: 20,
								color: '#F5F5F5'
							}}
						>
							Your symptoms
						</Text>) : (
							<ScrollView
								horizontal
								contentContainerStyle={{
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								{
									currentNames.map((value, index) => (
										<TouchableOpacity
											key={index}
											style={{
												marginRight: 15,
												backgroundColor: '#6E78F7',
												paddingVertical: 10,
												paddingHorizontal: 15,
												borderRadius: 20,
												flexDirection: 'row'
											}}
											onPress={() => { 
												setCurrent(currentNames.filter((item, currentIndex) => currentIndex !== index))
												setCurrentNames(currentNames.filter(item => item !== value))
											}}
										>
											<Icon
												name='CloseLine'
												size={20}
												color='#FFFFFF'
												style={{
													marginRight: 5
												}}
											/>
											<Text
												style={{
													color: '#FFFFFF'
												}}
											>{value}</Text>
										</TouchableOpacity>
									))
								}
							</ScrollView>
						)
				}
				
			</View>
				
			<ScrollView
				style={{
					marginTop: 20,
					backgroundColor: '#FFFFFF',
					borderTopLeftRadius: 25,
					borderTopRightRadius: 25,
					paddingHorizontal: 20,
					paddingTop: 20,
				}}
			>
				{
					loading ? <Text>Loading...</Text> : (
						symptoms.length !== 0 ?
							(
								symptoms.map((symptom: any, index) => {
									const selected = current.includes(symptom.id)
									return (
										<TouchableOpacity	
											key={index}
											style={{
												flex: 1,
												flexDirection: 'row',
												alignItems: 'center',
												padding: 20,
												borderBottomColor: '#F5F5F5',
												borderBottomWidth: 1
											}}
											onPress={async () => {
												if (selected) {
													setCurrent(prev => prev.filter(item => item !== symptom.id))
													setCurrentNames(prev => prev.filter(item => item !== symptom.name))
												} else {
													updateList(symptom.id)
													setCurrentNames(prev => [...prev, symptom.name])
												}
												// console.log('Current ', selected, 'current', current, 'symptoms', symptoms)
											}}
										>
											<Icon
												name={
													selected ? 'CheckTickCircleLine' : 'CheckCircleLine'
												}
												size={28}
												color='#EEEEEE'
											/>
											<Text
												style={{
													marginLeft: 25,
													color: '#363946'
												}}
											>{symptom.name}</Text>
										</TouchableOpacity>
									)
								})
							) : (
								<View
									style={{
										flex: 1,
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<Text>Oops it looks like there aren't any symptoms associated with your selection.</Text>
								</View>
							)
					)
				}
			</ScrollView>	
		</Screen>
	)
}