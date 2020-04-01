import { IEvent } from '../../../communication/socket/events/IEvent'

import { IRedisManager } from '../../../storage/redis'
import { ISocketManager } from '../../../communication/socket'

export default class FilterDiseases implements IEvent {
	public constructor(
		private cache: IRedisManager,
		private socket: ISocketManager
	) { }
	
	public async execute(data: any): Promise<void> {
		const { diseases }: { diseases: string[] } = data
		this.socket.getServer().emit('message', await FilterDiseases.sortByFrequency(diseases))
	}

	public static async sortByFrequency(diseases: string[]): Promise<typeof diseases> {
		let frequency: { [key: string]: number } = {}
		let sortable: any[] = []
		let newArr: string[] = []
		
		diseases.forEach(value => {
			if (value in frequency)
				frequency[value] += 1
			else 
				frequency[value] = 1
		})

		for (let key in frequency) {
			sortable.push([key, frequency[key]])
		}

		sortable.sort((a, b) => b[1] - a[1])
		sortable.forEach(obj => {
			for (var i = 0; i < obj[1]; i++) {
				newArr.push(obj[0])
			}
		})

		newArr = [...new Set(newArr)]
		return newArr
	}
}