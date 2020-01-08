export const handleMessage = (index, message) => {
	return({
		_id: index + 1,
		text: 'This is an example text',
		createdAt: new Date(),
		user: {
			_id: 2,
			name: 'Medkit',
			avatar: 'https://media.istockphoto.com/vectors/cute-white-doctor-robot-modern-health-care-flat-editable-vector-clip-vector-id949119664?k=6&m=949119664&s=612x612&w=0&h=7r0K6meHAFRuVU0h3PA7cq56IrvS2JzkLhCcLpkayf8='
		}
	})
}