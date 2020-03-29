import { Container } from 'inversify'

import SERVICE_IDENTIFIER from '../config/identifiers'

import Chat from '../Chat'

import ISocketManager from '../communication/socket/ISocketManager'
import SocketManager from '../communication/socket/SocketManager'

import IHTTPManager from '../communication/http/IHTTPManager'
import HTTPManager from '../communication/http/HTTPManager'

import { RedisManager, IRedisManager } from '../storage/redis'

let DIContainer = new Container()
DIContainer.bind<Chat>(Chat).toSelf().inRequestScope()
DIContainer.bind<ISocketManager>(SERVICE_IDENTIFIER.ISocketManager).to(SocketManager).inSingletonScope()
DIContainer.bind<IHTTPManager>(SERVICE_IDENTIFIER.IHTTPManager).to(HTTPManager).inSingletonScope()
DIContainer.bind<IRedisManager>(SERVICE_IDENTIFIER.IRedisManager).to(RedisManager).inSingletonScope()

export default DIContainer
