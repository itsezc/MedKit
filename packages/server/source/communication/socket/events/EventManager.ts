import { inject, injectable } from 'inversify'

import { IEvent, IEventMap } from './IEvent'

import { Auth, Disconnect, Init } from '../../../events'

import { SERVICE_IDENTIFIER } from '../../../includes/identifiers'
import { IRedisManager } from '../../../storage/redis'
import { ISocketManager, IEventManager } from '..'

@injectable()
export class EventManager implements IEventManager {

	public events: IEventMap
	public redisManager: IRedisManager
	public socketManager: ISocketManager

	public constructor(
		@inject(SERVICE_IDENTIFIER.IRedisManager) redisManager: IRedisManager,
	) {
		this.redisManager = redisManager
		this.redisManager.init()
		this.events = new Map<string, IEvent>()
	}

	public async init(socket: ISocketManager): Promise<void> {
		this.socketManager = socket
		this.fetchEvents()
	}

	private fetchEvents(): void {
		const events = this.getEvents()
		for (const entry of Object.entries(events)) {
			this.events.set(entry[0], new entry[1](this.redisManager, this.socketManager))
		}
	}

	public getEvents() {
		return {
			auth: Auth,
			requestDisconnect: Disconnect,
			init: Init
		}
	}
}