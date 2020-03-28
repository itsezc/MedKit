import json
import requests
from bs4 import BeautifulSoup

from queries.deleteDiseases import deleteDiseases
from queries.addDisease import addDisease

URL = 'https://www.nhs.uk/conditions/'
page = requests.get(URL)

parser = BeautifulSoup(page.content, 'html.parser')

with open('../../common/data/excludes.json') as file:
	excludes = json.load(file)['excludes']

diseases = []
diseasesPanels = parser.find_all('li', class_='nhsuk-list-panel__item')

for diseasePanel in diseasesPanels:
	disease = diseasePanel.find('a', class_='nhsuk-list-panel__link')
	diseases.append(disease.text)

excludes = set(excludes)
results = list(dict.fromkeys([x for x in diseases if x not in excludes]))

for result in results:
	# disease = diseasePanel.find('a', class_='nhsuk-list-panel__link', text=result)['href']
	# details = requests.get('https://www.nhs.uk' + link)
	# details = BeautifulSoup(details.content, 'html.parser')
	# details = parser.find_all('')
	try:
		addDisease(name=result)
	except:
		print 'Failed to add disease', result

print 'Total amount of diseases', len(results)