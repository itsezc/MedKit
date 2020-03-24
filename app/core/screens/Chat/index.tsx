import React, { useState, useEffect } from 'react'

import { chatHandler } from '../../chat'

import { Screen, ChatHeader as Header } from '../../components'
import { View, Text, TouchableOpacity } from 'react-native'
import { GiftedChat as Chat, Bubble } from 'react-native-gifted-chat'

export default function ({ navigation }) {

	const [messages, setMessages] = useState([])
	
	useEffect(() => {
		setMessages([])
		const handler = new chatHandler(addToMessageBoard)

		return function cleanup() {
			handler.disconnect()
		}
	}, [])

	const quickReplyType = messages[messages.length - 1]?.quickReplies?.type
	const quickReplies = messages[messages.length - 1]?.quickReplies?.values

	const addToMessageBoard = newMessages => setMessages(prevMessages => Chat.append(prevMessages, newMessages))

	return (
		<Screen
			background='#2B8FFF'
		>
			<Header navigation={navigation} />
			<View
				style={{
					flex: 1,
					zIndex: 2
				}}
			>
				<Chat
					messages={messages}
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
								<TouchableOpacity
									onPress={() => {
										addToMessageBoard({
											_id: messages.length + 1,
											text: title,
											createdAt: new Date(),
											user: {
												_id: 1
											}
										})
									}}
									key={index}
									style={{
										backgroundColor: '#3BCCBB',
										marginVertical: 5,
										width: 200,
										borderRadius: 25
									}}
								>
									<Text
										
										style={{
											textAlign: 'center',
											color: '#FFFFFF',
											padding: 15
										}}
									>
										{title}
									</Text>
								</TouchableOpacity>
							))
						}
						{
							quickReplyType === 'checkbox' ? 
								<TouchableOpacity
									style={{
										backgroundColor: '#FFFFFF',
										marginVertical: 5,
										width: 200,
										borderRadius: 25
									}}
								>
									<Text
										
										style={{
											textAlign: 'center',
											color: '#000000',
											padding: 15
										}}
									>
										Send
									</Text>
								</TouchableOpacity> : null
						}
					</View>
				): null
			}
		</Screen>
	)
}