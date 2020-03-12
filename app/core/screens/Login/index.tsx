import * as React from 'react'

import { Text, Button } from 'react-native'
import { TextField } from 'react-native-material-textfield'

import { Screen } from '../../components/Screen'

import { verifyAuth, errorHandler } from '../../auth'
import { useMutation, gql, useApolloClient } from '@apollo/client'

const LOGIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				id
				email
				firstName
				lastName
				dateOfBirth
				weight
			}
		}
	}
`

const initialState = {
	email = '',
	password = '',
	emailError = '',
	passwordError = ''
}

export default function ({ navigation }) {

	const client = useApolloClient()

	const [{ email, password, emailError, passwordError }, setState] = React.useState(initialState)

	const [processLogin, { loading }] = useMutation(LOGIN_MUTATION, {
		onCompleted: async (data) => {
			const { login: { user } } = data
			await verifyAuth(data)
			setState({ ...initialState })
			navigation.navigate('Home')
		},
		onError: async(error) => errorHandler(error, setState)
	})

	return (
		<Screen>
			<Button
				title='Register'
				onPress={() => navigation.push('Register')}
			/>
		</Screen>
	)

