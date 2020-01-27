import React, { useState, useEffect, useRef } from 'react'

import { GiftedChat as Chat, Bubble } from 'react-native-gifted-chat'
import { View, Text } from 'react-native'

import { useLazyQuery, gql } from '@apollo/client'

const GET_CHAT_RESPONSE = gql`
	query chatResponse($index: Int, $message: String) {
		handleMessage(index: $index, message: $message) {
			_id
			text
			createdAt
			user {
				_id
				name
				avatar
			}
			image
			video
			system
		}
	}
`

export default function HomeScreen(props) {

	const [messages, setMessages] = useState([
		{
			_id: 4,
			text: 'It started in the last week',
			createdAt: new Date(),
			user: {
				_id: 1
			},
		},
		{
			_id: 3,
			text: 'When did you start coughing?',
			createdAt: new Date(),
			user: {
				_id: 2
			},
		}	,
		{
			_id: 2,
			text: 'I\'m sorry to hear that, let me ask you a few questions about your symptoms',
			createdAt: new Date(),
			user: {
				_id: 2
			},
		},
		{
			_id: 1,
			text: 'I have the following symptoms: chest pain, coughing, sneezing and high temperature',
			createdAt: new Date(),
			user: {
				_id: 1
			},
		},
	])

	const [getChatResponse, { loading, data }] = useLazyQuery(GET_CHAT_RESPONSE, {
		onCompleted: (data) => data.handleMessage ? addToMessageBoard([ data.handleMessage ]) : null	
	})

	const addToMessageBoard = newMessages => setMessages(prevMessages => Chat.append(prevMessages, newMessages))

	const sendMessage = async (newMessages = []) => {

		await addToMessageBoard(newMessages)

		const index = messages.length ? messages.length : 0
		const message = newMessages[0].text

		await getChatResponse({ 
			variables: {
				index,
				message
			}
		})
	}

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: '#2B8FFF'
			}}
		>
			<View 
				style={{
					height: '80px',
					justifyContent: 'center',
					alignItems: 'center',
					shadowOpacity: 0.25,
					shadowOffset: {
						width: 0,
						height: 0
					},
					shadowRadius: 10,
					shadowColor: '#000'
				}}	
			>
				<Text
					style={{
						color: '#FFFFFF'
					}}
				>
					Check Up
				</Text>
			</View>
			<Chat
				isTyping={true}
				messages={messages}
				onSend={newMessages => sendMessage(newMessages)}
				user={{
					_id: 1
				}}
				renderComposer={() => false}
				renderAvatar={null}
				renderTime={() => false}
				renderDay={() => false}
				renderBubble ={(props) => {
					return (
						<Bubble
							{...props}
							textStyle={{
								right: {
									color: '#00406B',
									margin: 0,
									fontSize: 14
								},
								left: {
									color: '#FFFFFF',
									margin: 0,
									fontSize: 14
								}
							}}
							wrapperStyle={{
								left: {
									backgroundColor: '#2380E9',
									borderTopLeftRadius: 0,
									paddingVertical: 20,
									paddingHorizontal: 25,
									marginBottom: 5
								},
								right: {
									backgroundColor: '#FFFFFF',
									borderTopRightRadius: 0,
									paddingVertical: 20,
									paddingHorizontal: 25,
									marginBottom: 5
								}
							}}
							containerToNextStyle={{
								left: {
									borderTopLeftRadius: 0,
								}
							}}
							containerToPreviousStyle={{
								right: {
									borderTopRightRadius: 0,
								}
							}}
						/>
					)
				}}
			/>
		</View>
	)
}

HomeScreen.navigationOptions = {
	header: null,
};
