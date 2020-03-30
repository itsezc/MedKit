import { inject, injectable } from 'inversify'

import { IEventMap } from './IEvent'
import IEventManager from './IEventManager'

import Auth from '../../events/auth/Auth'
import Identify from '../../events/stages/identify/Identify'
import FilterDiseases from '../../events/stages/filterDiseases/FilterDisease'

import SERVICE_IDENTIFIER from '../../config/identifiers'
import { IRedisManager } from '../../storage/redis'
import { ISocketManager } from '.'

@injectable()
export default class EventManager implements IEventManager {

	public events: IEventMap
	public redisManager: IRedisManager
	public socketManager: ISocketManager

	public constructor(
		@inject(SERVICE_IDENTIFIER.IRedisManager) redisManager: IRedisManager,
	) {
		this.redisManager = redisManager
		this.redisManager.init()
		this.events = new Map<string, Identify>()
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
			identify: Identify,
			filterDiseases: FilterDiseases
		}
	}
}