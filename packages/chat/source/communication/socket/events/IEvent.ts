interface IEvent {
	execute(data: any): Promise<void>
}

type IEventMap = Map<string, IEvent>

export { IEvent, IEventMap }