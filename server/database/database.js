import { DB } from './connection'
import { Project as ProjectConstructor } from 'cruddl'

import coreSchema from './schemas/database.graphql'

const Project = ({
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
							{
								roles: ['users'],
								access: 'readWrite'
							}
						]
					}
				}
			})
		}
	],
	getExecutionOptions: ({ context }) => ({ authRoles: ['users'] })
})

const schema = Project.createSchema(DB)

DB.updateSchema(Project.getModel())

export {
	schema
}
