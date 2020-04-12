export interface IStage {
	process(data: any): Promise<void>
}