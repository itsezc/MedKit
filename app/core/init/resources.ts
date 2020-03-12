import { Asset } from 'expo-asset'
import * as Font from 'expo-font' 

export async function loadResourcesAsync() {
	await Promise.all([
		Font.loadAsync({
			'circular-std': require('../../assets/fonts/CircularStd-Medium.ttf')
		})
	])
}

export function handleLoadingError(error: Error) {
	console.warn('\n', error)
}