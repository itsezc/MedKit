import { Container } from 'inversify'

import { SERVICE_IDENTIFIER } from '../identifiers'

import Server from '../../server'
import { SocketManager, ISocketManager, IEventManager, EventManager } from '../../communication/socket'
import { IHTTPManager, HTTPManager } from '../../communication/http'
import { IRedisManager, RedisManager } from '../../storage/redis'
import { QueryManager, IQueryManager } from '../../communication/graphql/query'
import { IFederationManager, FederationManager } from '../../communication/graphql/federation'
import { IGatewayManager, GatewayManager } from '../../communication/graphql/gateway'
import { IDatabaseManager, DatabaseManager } from '../../communication/database'

const ServerContainer = new Container()
ServerContainer.bind<Server>(Server).toSelf().inRequestScope()
ServerContainer.bind<IHTTPManager>(SERVICE_IDENTIFIER.IHTTPManager).to(HTTPManager).inSingletonScope()
ServerContainer.bind<ISocketManager>(SERVICE_IDENTIFIER.ISocketManager).to(SocketManager).inSingletonScope()
ServerContainer.bind<IDatabaseManager>(SERVICE_IDENTIFIER.IDatabaseManager).to(DatabaseManager).inSingletonScope()
ServerContainer.bind<IFederationManager>(SERVICE_IDENTIFIER.IFederationManager).to(FederationManager).inSingletonScope()
ServerContainer.bind<IGatewayManager>(SERVICE_IDENTIFIER.IGatewayManager).to(GatewayManager).inSingletonScope()
ServerContainer.bind<IEventManager>(SERVICE_IDENTIFIER.IEventManager).to(EventManager).inSingletonScope()
ServerContainer.bind<IRedisManager>(SERVICE_IDENTIFIER.IRedisManager).to(RedisManager).inSingletonScope()
ServerContainer.bind<IQueryManager>(SERVICE_IDENTIFIER.IQueryManager).to(QueryManager).inSingletonScope()
export { ServerContainer }