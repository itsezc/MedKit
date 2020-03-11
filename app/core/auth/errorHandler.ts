export function errorHandler(rawError: Error, setState) {
	let error = rawError
		.toString()
		.replace('Error', '')
		.replace('GraphQL error', '')
		.slice(1)
	
	switch (error) {
		case 'PASSWORD_INVALID':
			setState(prevState => ({ ...prevState, passwordError: 'The password is invalid' }))
			break

		case 'NO_ACCOUNT':
			setState(prevState => ({ ...prevState, emailError: 'No account found on this email' }))
			break

		default:
			break;
	}
}