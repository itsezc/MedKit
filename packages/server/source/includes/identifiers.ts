const SERVICE_IDENTIFIER= {
	IDatabaseManager: Symbol.for('DatabaseManager'),
	IGatewayManager: Symbol.for('GatewayManager'),
	IFederationManager: Symbol.for('FederationManager'),
	IHTTPManager: Symbol.for('HTTPManager'),
	ISocketManager: Symbol.for('SocketManager'),
}

export { SERVICE_IDENTIFIER }