import { Container } from 'inversify'

import SERVICE_IDENTIFIER from '../config/identifiers'

import Chat from '../Chat'

import ISocketManager from '../communication/socket/ISocketManager'
import SocketManager from '../communication/socket/SocketManager'

import IHTTPManager from '../communication/http/IHTTPManager'
import HTTPManager from '../communication/http/HTTPManager'

let DIContainer = new Container()
DIContainer.bind<Chat>(Chat).toSelf().inRequestScope()
DIContainer.bind<ISocketManager>(SERVICE_IDENTIFIER.ISocketManager).to(SocketManager).inSingletonScope()
DIContainer.bind<IHTTPManager>(SERVICE_IDENTIFIER.IHTTPManager).to(HTTPManager).inSingletonScope()

export default DIContainer
