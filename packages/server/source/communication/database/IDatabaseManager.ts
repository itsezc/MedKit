export interface IDatabaseManager {
	init(): void
	start(port?: number): void
}