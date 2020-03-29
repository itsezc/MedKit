import 'reflect-metadata'

import Chat from './Chat'
import ChatContainer from './injectors/ChatContainer'

const chatHandler = ChatContainer.get<Chat>(Chat)

chatHandler.init()