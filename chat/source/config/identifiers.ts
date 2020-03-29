const SERVICE_IDENTIFIER = {
	ISocketManager: Symbol.for('SocketManager'),
	IHTTPManager: Symbol.for('HTTPManager'),
	IRedisManager: Symbol.for('RedisManager'),
	IEventManager: Symbol.for('EventManager')
}

export default SERVICE_IDENTIFIER