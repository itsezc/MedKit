import React, { useState, useEffect } from 'react'

import { chatHandler } from '../../chat'

import { Screen, Icon } from '../../components'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { GiftedChat as Chat, Bubble } from 'react-native-gifted-chat'

export default function ({ navigation }) {

	const [messages, setMessages] = useState([
		// {
		// 	_id: 1,
		// 	text: 'I have the following symptoms: chest pain, coughing, sneezing and high temperature',
		// 	createdAt: new Date(),
		// 	user: {
		// 		_id: 1
		// 	}
		// },
		// {
		// 	_id: 2,
		// 	text: 'I\'m sorry to hear that, let me ask you a few questions about your symptoms',
		// 	createdAt: new Date(),
		// 	user: {
		// 		_id: 2
		// 	},
		// },
		// {
		// 	_id: 3,
		// 	text: 'When did you start coughing?',
		// 	createdAt: new Date(),
		// 	user: {
		// 		_id: 2
		// 	},
		// 	quickReplies: {
		// 		type: 'checkbox', // or 'radio',
		// 		values: [
		// 			{
		// 				title: 'Less than a day',
		// 				value: 'yes',
		// 			},
		// 			{
		// 				title: 'Less than a week',
		// 				value: 'yes_picture',
		// 			},
		// 			{
		// 				title: 'Over 1 week',
		// 				value: 'no',
		// 			},
		// 			{
		// 				title: 'Over 1 month',
		// 				value: 'no',
		// 			},
		// 		],
		// 	}
		// }
	])
	
	useEffect(() => {
		const handler = new chatHandler(addToMessageBoard)

		return function cleanup() {
			handler.disconnect()
		}
	}, [])

	const quickReplies = messages[messages.length - 1]?.quickReplies?.values

	const addToMessageBoard = newMessages => setMessages(prevMessages => Chat.append(prevMessages, newMessages))

	const sendMessage = async (newMessages = []) => {

		addToMessageBoard(newMessages)

		const index = messages.length ? messages.length : 0
		const message = newMessages[0].text
	}

	return (
		<Screen>
			<View
				style={{
					flex: 1,
					backgroundColor: '#2B8FFF',
				}}
			>
				<View 
					style={{
						height: 65,
						flexDirection: 'row',
						alignItems: 'center',
						paddingHorizontal: 20,
						shadowColor: '#000',
						shadowOpacity: 0.25,
						shadowOffset: {
							width: 0,
							height: 0
						},
						shadowRadius: 5,
						elevation: 5,
						backgroundColor: '#2B8FFF',
						zIndex: 3
					}}	
				>
					<TouchableWithoutFeedback
						onPress={() => navigation.navigate('Home')}
					>
						<View>
							<Icon
								name='ArrowLeftLine'
								color='#FFFFFF'
								size='26'
							/>
						</View>
					</TouchableWithoutFeedback>

					<View
						style={{
							flex: 1
						}}
					>
						<Text
							style={{
								color: '#FFFFFF',
								width: '100%',
								textAlign: 'center',
								fontSize: 15
							}}
						>
							Dr. Robot
						</Text>
						<Text
							style={{
								color: '#FFFFFF',
								textAlign: 'center',
								fontSize: 12,
								marginTop: 5
							}}
						>
							15K people like me
						</Text>
					</View>

					<Icon
						name='CloseLine'
						color='#FFFFFF'
						size='26'
					/>
				</View>
				<View
					style={{
						flex: 1,
						zIndex: 2
					}}
				>
					<Chat
						messages={messages}
						onSend={newMessages => sendMessage(newMessages)}
						user={{
							_id: 1
						}}
						renderAvatar={null}
						renderComposer={() => false}
						renderTime={() => false}
						renderDay={() => false}
						renderQuickReplies={() => false}
						renderBubble ={(props) => {
							return (
								<Bubble
									{...props}
									// @ts-ignore
									textStyle={{
										right: {
											color: '#00406B',
											marginHorizontal: 0,
											padding: 0,
											fontSize: 14
										},
										left: {
											color: '#FFFFFF',
											marginHorizontal: 0,
											padding: 0,
											fontSize: 14
										}
									}}
									wrapperStyle={{
										left: {
											backgroundColor: '#2380E9',
											borderTopLeftRadius: 0,
											paddingVertical: 15,
											paddingHorizontal: 20,
											marginBottom: 5
										},
										right: {
											backgroundColor: '#FFFFFF',
											borderTopRightRadius: 0,
											paddingVertical: 15,
											paddingHorizontal: 20,
											marginBottom: 5
										}
									}}
									containerToNextStyle={{
										left: {
											borderBottomLeftRadius: 15,
										},
										right: {
											borderBottomRightRadius: 15,
										}
									}}
									containerToPreviousStyle={{
										right: {
											borderTopRightRadius: 0,
										},
										left: {
											borderTopLeftRadius: 0,
										}
									}}
								/>
							)
						}}
					/>
				</View>
				{
					quickReplies ? (
						<View
							style={{
								paddingVertical: 20,
								zIndex: 2,
								backgroundColor: '#2276DF',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column'
							}}
						>
							{
								quickReplies.map(({ title, value }, index) => (
									<View
										style={{
											backgroundColor: '#3BCCBB',
											marginVertical: 5,
											width: '60%',
											borderRadius: 25
										}}
										key={index}
									>
										<Text
											
											style={{
												textAlign: 'center',
												color: '#FFFFFF',
												paddingVertical: 15
											}}
										>
											{title}
										</Text>
									</View>
								))
							}
						</View>
					): null
				}
			</View>
		</Screen>
	)
}