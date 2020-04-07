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

	let [searchSymptom, searchProps] = useLazyQuery(SEARCH_SYMPTOMS)
	const { loading, error, refetch, data } = useQuery(
		FETCH_SYMPTOMS,
		{ variables: { current }}
	)

	if (error) console.log(':::: ERROR - ', error)

	const updateList = (id: string) => {
		setCurrent(prev => [...prev, id])
	}

	React.useEffect(() => {
		refetch()
	}, [current])

	React.useMemo(() => {
		if (data
			&& data.getSymptoms) setSymptoms(data.getSymptoms)
	}, [data])

	if (searchProps.data
		&& searchProps.data.getSymptom) console.log('Search', searchProps.data.getSymptom)

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
						name='CloseLine'
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
						shadowColor: '#000',
						shadowOffset: {
							height: 0,
							width: 0
						},
						shadowOpacity: 0.25,
						shadowRadius: 3,
						elevation: 1,
					}}
					onChangeText={text => searchSymptom({ variables: { text } })}
					placeholder='Search Symptoms'
				/>
			</View>
				
			<ScrollView
				style={{
					marginTop: 40,
					backgroundColor: '#FFFFFF',
					borderTopLeftRadius: 25,
					borderTopRightRadius: 25,
					paddingHorizontal: 20,
					paddingTop: 20,
					flexDirection: 'column'
				}}
			>
				{
					loading ? <Text>Loading...</Text> : (
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
										if (selected) setCurrent(prev => prev.filter(item => item !== symptom.id))
										else updateList(symptom.id)
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
					)
				}
			</ScrollView>	
		</Screen>
	)
}