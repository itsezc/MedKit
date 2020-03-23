export async function createMessage(message: string, currentIndex: number = 0) {
	return {
		_id: currentIndex + 1,
		text: message,
		createdAt: new Date(),
		user: {
			_id: 2
		}
	}
}