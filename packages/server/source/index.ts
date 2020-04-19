import 'reflect-metadata'

import Server from './server'
import { ServerContainer } from './includes/injectors/ServerContainer'

const server = ServerContainer.get<Server>(Server)
server.init()

export { server }