export interface IQueryManager {
	query(query: string, variables: object): Promise<JSON | Error>
}