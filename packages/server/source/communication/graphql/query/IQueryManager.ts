export interface IQueryManager {
	query(queryObj: string, variables?: object): Promise<{ [key: string]: object | object[] | string | number }>
}