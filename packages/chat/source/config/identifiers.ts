const SERVICE_IDENTIFIER = {
	ISocketManager: Symbol.for('SocketManager'),
	IHTTPManager: Symbol.for('HTTPManager'),
	IRedisManager: Symbol.for('RedisManager'),
	IEventManager: Symbol.for('EventManager')
}

export const STAGE_IDENTIFIER = {
	Identify: Symbol.for('Identify'),
	FilterDiseases: Symbol.for('FilterDiseases')
}

export default SERVICE_IDENTIFIER