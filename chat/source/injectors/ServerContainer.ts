import { Container } from 'inversify'

import { Server } from '../server'

let DIContainer = new Container()
DIContainer.bind<Server>(Server).toSelf()

export default DIContainer
