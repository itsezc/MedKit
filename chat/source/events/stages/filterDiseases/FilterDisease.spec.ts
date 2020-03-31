import FilterDisease from './FilterDisease'
const { sortByFrequency } = FilterDisease

test('sortByFrequency - Sorting', async () => {
	expect(await sortByFrequency(['1', '2', '2', '3', '3', '4', '5', '5', '5'])).toStrictEqual(['5', '2', '3', '1' , '4'])
	expect(await sortByFrequency(['2', '2', '3', '3'])).toStrictEqual(['2', '3'])
	expect(await sortByFrequency(['2', '3', '2', '3'])).toStrictEqual(['2', '3'])
	expect(await sortByFrequency(['medicine1', 'medicine2'])).toStrictEqual(['medicine1', 'medicine2'])
	expect(await sortByFrequency(['medicine2', 'medicine1', 'medicine2'])).toStrictEqual(['medicine2', 'medicine1'])
	expect(await sortByFrequency(['medicine1', 'medicine2', 'medicine2', 'medicine1'])).toStrictEqual(['medicine1', 'medicine2'])
})