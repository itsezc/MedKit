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

import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {

	const [messages, setMessages] = useState([])

	const [getChatResponse, { loading, data }] = useLazyQuery(GET_CHAT_RESPONSE)
	
	const addToMessageBoard = (newMessages = []) => setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages))

	const sendMessage = (newMessages = []) => {
		
		addToMessageBoard(newMessages)

		const index = messages.length
		const message = newMessages[0].text

		getChatResponse({ variables: {
			index,
			message
		}})

		// fetch(
		// 	'https://api.wit.ai/message?q=' + newMessages[0].text, {
		// 		method: 'GET',
		// 		headers: {
		// 			Authorization: `Bearer TY6OJIZDF47F6FFRMWLD6N7YAI6QFVGK`
		// 		}
		// 	}
		// )
		// .then(response => response.json())
		// .then(json => console.log(json.entities))
		// .then(json => {
			// setMessages(
			// 	GiftedChat.append(messages, {
			// 		_id: messages.length + 1,
			// 		text: 'You have a disease!',
			// 		createdAt: new Date(),
			// 		user: {
			// 			_id: 2,
			// 			name: 'Medical Bot',
			// 			avatar: 'https://media.istockphoto.com/vectors/cute-white-doctor-robot-modern-health-care-flat-editable-vector-clip-vector-id949119664?k=6&m=949119664&s=612x612&w=0&h=7r0K6meHAFRuVU0h3PA7cq56IrvS2JzkLhCcLpkayf8='
			// 		}
			// 	})
			// )

			// console.log('#2', messages)
		// })
		
		BotMessage(messages)
	}

	const BotMessage = (messages) => {
		
		let _id = messages.length ? messages.length : 0

		addToMessageBoard([{
			_id,
			text: 'You have a disease!',
			createdAt: new Date(),
			// quickReplies: {
			// 	type: 'radio', // or 'checkbox',
			// 	keepIt: true,
			// 	values: [
			// 	  {
			// 	    title: '😋 Yes',
			// 	    value: 'yes',
			// 	  },
			// 	  {
			// 	    title: '📷 Yes, let me show you with a picture!',
			// 	    value: 'yes_picture',
			// 	  },
			// 	  {
			// 	    title: '😞 Nope. What?',
			// 	    value: 'no',
			// 	  },
			// 	],
			// },
			user: {
				_id: 2,
				name: 'Medical Bot',
				avatar: 'https://media.istockphoto.com/vectors/cute-white-doctor-robot-modern-health-care-flat-editable-vector-clip-vector-id949119664?k=6&m=949119664&s=612x612&w=0&h=7r0K6meHAFRuVU0h3PA7cq56IrvS2JzkLhCcLpkayf8='
			}
		}])
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
	);
}

HomeScreen.navigationOptions = {
	header: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center',
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightText: {
		color: 'rgba(96,100,109, 0.8)',
	},
	codeHighlightContainer: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center',
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { width: 0, height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3,
			},
			android: {
				elevation: 20,
			},
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20,
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center',
	},
	navigationFilename: {
		marginTop: 5,
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});
