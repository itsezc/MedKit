import React, { useState, useEffect, useRef } from 'react'

import { GiftedChat as Chat } from 'react-native-gifted-chat'
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
			_id: 2,
			text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
			createdAt: new Date(),
			quickReplies: {
				type: 'radio', // or 'checkbox',
				keepIt: true,
				values: [
				{
				title: '😋 Yes',
				value: 'yes',
				},
				{
				title: '📷 Yes, let me show you with a picture!',
				value: 'yes_picture',
				},
				{
				title: '😞 Nope. What?',
				value: 'no',
				},
				],
			},
			user: {
				_id: 1,
				name: 'React Native',
			},
		},
		{
			_id: 1,
			text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
			createdAt: new Date(),
			user: {
				_id: 2,
				name: 'React Native',
			},
		}		
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
				backgroundColor: '#2276DF'
			}}
		>
			<View 
				style={{
					backgroundColor: '#2276DF',
					height: '80px',
					justifyContent: 'center',
					alignItems: 'center',
					shadowOpacity: 0.35,
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
			/>
		</View>
	)
}

HomeScreen.navigationOptions = {
	header: null,
};
