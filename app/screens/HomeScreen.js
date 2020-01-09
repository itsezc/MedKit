import * as WebBrowser from 'expo-web-browser'

import React, { useState, useEffect, useRef } from 'react'

import { GiftedChat } from 'react-native-gifted-chat'

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

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {

	const [messages, setMessages] = useState([])

	const [getChatResponse, { loading, data }] = useLazyQuery(GET_CHAT_RESPONSE, {
		onCompleted: (data) => data.handleMessage ? addToMessageBoard([ data.handleMessage ]) : null	
	})

	const addToMessageBoard = newMessages => setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages))

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
		<GiftedChat
			isTyping={true}
			messages={messages}
			onSend={newMessages => sendMessage(newMessages)}
			user={{
				_id: 1
			}}
		/>
	)
}

HomeScreen.navigationOptions = {
	header: null,
};
