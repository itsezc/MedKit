import { ISocketManager } from '../ISocketManager'
import { IEvent } from './IEvent'

export interface IEventManager {
	events: Map<string, IEvent>
	init(socketHandler: ISocketManager): void
	getEvents(): void
}