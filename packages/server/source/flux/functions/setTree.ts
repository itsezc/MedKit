export async function setTree(obj: object, path: string[], value: any, setrecursively = false) {
	path.reduce((a, b, level) => {
		if (setrecursively && typeof a[b] === 'undefined' && level !== path.length) {
			a[b] = {}
			return a[b]
		}
		if (level === path.length){
			a[b] = value
			return value
		} 
		return a[b]
	}, obj)
}