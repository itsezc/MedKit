import json
from gql import gql
from _graphql import client

def addDisease(name):
	QUERY_ADD_DISEASE = gql('''
		mutation addDisease($name: String!) {
			createDisease (
				input: {
					name: $name
				}
			) {
				id
				name
			}
		}
	''')
	params = {
		'name': name
	}
	print client.execute(QUERY_ADD_DISEASE, variable_values=json.dumps(params))