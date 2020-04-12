import { Container } from 'inversify'

import { SERVICE_IDENTIFIER } from '../identifiers'

import Server from '../../server'

const ServerContainer = new Container()
ServerContainer.bind<Server>(Server).toSelf().inRequestScope()

export { ServerContainer }