import { DB } from './connection'
import { Project as ProjectConstructor } from 'cruddl'

import coreSchema from './schemas/database.graphql'

const ProjectConstructor = ({
	sources: [
		{
			name: 'schema.graphql',
			body: coreSchema
		},
		{
			name: 'permission-profiles.json',
			body: JSON.stringify({
				permissionProfiles: {
					default: {
						permissions: [
							roles: ['users'],
							access: 'readWrite'
						]
					}
				}
			})
		}
	],
	getExecutionOptions: ({ context }) => ({ authRoles: ['users'] }),
	getOperationIdentifer: ({ context }) => context as object
})

const schema = ProjectConstructor.createSchema(DB)

DB.updateSchema(ProjectConstructor.getModel())

export {
	schema
}
