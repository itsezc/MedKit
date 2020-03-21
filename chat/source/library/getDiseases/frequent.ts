export function Frequent(array: [string]): string {
	return Object.entries(array.reduce((previous: any, current: any) => {
		if (previous[current] === undefined) previous[current] = 1
		else previous[current]++
		return previous
	}, {})).reduce((previous, current) => (current[1] >= previous[1] ? current : previous))[0]
}