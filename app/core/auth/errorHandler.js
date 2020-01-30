// @flow

export const errorHandler = (rawError, setEmailError, setPasswordError) => {

	let error = rawError
				.toString()
				.replace('Error: ', '')
				.replace('GraphQL error:', '')
				.slice(1)
	
	switch (error) {
		case 'PASSWORD_INVALID':
			setPasswordError('The password is invalid')
			break
		
		case 'NO_ACCOUNT':
			setEmailError('No account found on this email')
			break
		
		default:
			break;
	}
	
	
}