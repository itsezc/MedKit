import { Stage } from '../Stage'
import { IStage } from '../IStage'

export default class FilterDiseases extends Stage implements IStage {
	public async process() {
		const diseases = await this.redis.getList(`${this.socketID}_diseases`)
		this.redis.updateList(`${this.socketID}_diseases`, await FilterDiseases.sortByFrequency(diseases))
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