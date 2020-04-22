import React from 'react'

import { Application, Card, Input, Button } from 'react-rainbow-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faUser, faStar } from '@fortawesome/free-solid-svg-icons'

import { ApolloProvider, useMutation, gql } from '@apollo/client'

const LOGIN_MUTATION = gql`
	mutation Login($email: String!, $password: String!, $deviceID: String!) {
		login(email: $email, password: $password, deviceID: $deviceID) {
			token
		}
	}
`

const inputStyles = {
	width: 300,
  };
  
const iconContainerStyles = {
	width: '2.5rem',
	height: '2.5rem',
};

export const Login = () => {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	const deviceID = 'web'

	const [processLogin, { loading }] = useMutation(LOGIN_MUTATION, {
		onCompleted: async (data) => {
			console.log(data)
		}
	})

	return (
		<Application className='rainbow-p-vertical_x-large rainbow-p-horizontal_small'>
				<div className='rainbow-m-around_large'>
					<Card
						icon={
							<span
								className='rainbow-background-color_success rainbow-border-radius_circle rainbow-align-content_center'
								style={iconContainerStyles}
							>
							<FontAwesomeIcon icon={faTasks} size='lg' className='rainbow-color_white' />
							</span>
						}
						title='Login'
						actions={
							<Button variant='brand' label='Login' onClick={() => processLogin({ variables: { email, password, deviceID } })} />
						}
					>
						<div className='rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column'>
							<div style={{
								width: '100%',
								marginLeft: 85,
								padding: '20px 0'
							}}>
								<Input
									className='rainbow-p-around_medium'
									style={inputStyles}
									placeholder='Email'
									value={email}
									onChange={e => setEmail(e.target.value)}
									icon={<FontAwesomeIcon icon={faUser} className='rainbow-color_gray-3' />}
								/>
								<br />
								<Input
									className='rainbow-p-around_medium'
									style={inputStyles}
									placeholder='Password'
									value={password}
									onChange={e => setPassword(e.target.value)}
									type='password'
									icon={<FontAwesomeIcon icon={faStar} className='rainbow-color_gray-3' />}
								/>
							</div>
						</div>
					</Card>
				</div>
			</Application>
	)
}