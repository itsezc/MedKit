from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport

transport = RequestsHTTPTransport(
	url = 'http://localhost:8085/medkit',
	use_json = True,
	headers = {
		'Content-Type': 'application/json'
	},
	verify = False
)

client = Client(
	retries = 3,
	transport = transport,
	fetch_schema_from_transport = True 
)