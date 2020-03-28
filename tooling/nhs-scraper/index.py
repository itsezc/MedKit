import json
import requests
from bs4 import BeautifulSoup

URL = 'https://www.nhs.uk/conditions/'
page = requests.get(URL)

parser = BeautifulSoup(page.content, 'html.parser')

diseasesPanels = parser.find_all('li', class_='nhsuk-list-panel__item')
for diseasePanel in diseasesPanels:
	disease = diseasePanel.find('a', class_='nhsuk-list-panel__link')
	print disease.text
