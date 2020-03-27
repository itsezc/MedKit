import { AUTH_TOKEN } from '../../../../server/source/authToken'
import fetchAccount from '../../../../server/source/lib/Account/library/fetchAccount'
import JWT from 'jsonwebtoken'

export async function Auth({ token }: { token: string }): Promise<object> {
	JWT.verify(token, AUTH_TOKEN, async (error, result: any) => {
		if (!error) {
			const { id }: { id: string } = result
			return await fetchAccount(id)
		}
	})

	return null
}