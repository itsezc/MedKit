from gql import gql, Client
from _graphql import client

def deleteDiseases():
	QUERY_DELETE_ALL_DISEASES = gql(''' 
		mutation {
			deleteAllDiseases { 
				id 
			} 
		}
	''')
	client.execute(QUERY_DELETE_ALL_DISEASES)
