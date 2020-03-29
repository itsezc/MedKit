import ISocketManager from './ISocketManager'
import { IEvent, IEventMap } from './IEvent'

export default interface IEventManager {
	events: Map<string, IEvent>
	init(socketHandler: ISocketManager): void
	getEvents(): void
}