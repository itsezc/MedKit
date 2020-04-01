class Authentication {
	public constructor(
		protected token?: string
	) { }
	
	public async setToken(newToken: string) {
		this.token = newToken
	}

	public async getToken(): Promise<string> {
		return this.token
	}
}

export const Auth = new Authentication()