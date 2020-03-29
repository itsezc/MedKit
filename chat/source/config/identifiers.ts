const SERVICE_IDENTIFIER = {
	ISocketManager: Symbol.for('SocketManager'),
	IHTTPManager: Symbol.for('HTTPManager'),
	IRedisManager: Symbol.for('RedisManager')
}

export default SERVICE_IDENTIFIER