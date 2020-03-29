import { Container } from 'inversify'

import SERVICE_IDENTIFIER from '../config/identifiers'

import Chat from '../Chat'

import { SocketManager, ISocketManager, EventManager, IEventManager } from '../communication/socket'
import { HTTPManager, IHTTPManager } from '../communication/http'
import { RedisManager, IRedisManager } from '../storage/redis'

let DIContainer = new Container()
DIContainer.bind<Chat>(Chat).toSelf().inRequestScope()
DIContainer.bind<IHTTPManager>(SERVICE_IDENTIFIER.IHTTPManager).to(HTTPManager).inSingletonScope()
DIContainer.bind<ISocketManager>(SERVICE_IDENTIFIER.ISocketManager).to(SocketManager).inSingletonScope()
DIContainer.bind<IEventManager>(SERVICE_IDENTIFIER.IEventManager).to(EventManager).inSingletonScope()
DIContainer.bind<IRedisManager>(SERVICE_IDENTIFIER.IRedisManager).to(RedisManager).inSingletonScope()

export default DIContainer
