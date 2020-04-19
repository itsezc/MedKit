const SERVICE_IDENTIFIER= {
	IDatabaseManager: Symbol.for('DatabaseManager'),
	IGatewayManager: Symbol.for('GatewayManager'),
	IFederationManager: Symbol.for('FederationManager'),
	IHTTPManager: Symbol.for('HTTPManager'),
	ISocketManager: Symbol.for('SocketManager'),
	IRedisManager: Symbol.for('RedisManager'),
	IEventManager: Symbol.for('EventManager'),
}

export { SERVICE_IDENTIFIER }