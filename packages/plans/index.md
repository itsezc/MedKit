1)
	Background:

		User inputs a list of symptoms (min 1 - max 10~)
	
	Task:
		Fetch diseases based on the list of symptoms

	Example #1:

		User inputs [cold, vomiting, cough, high temp]

		Fetch disesaes that have all or most of the symptoms described

	Example #2:

		Q1 - [cold] in Diseases
			4 Results => [cold, asthma, fever, cancer]

		Q2 - [vomiting] in Diseases
			3 Results => [fever, chest infection, artheris]

		Q3 - [cough] in Diseases
			2 Results => [cold, chest infection, tb]

		Q4 - [high temp] in Diseases
			2 Results => [fever, typhoid]
		
		//Most prolly fever or cold or chest infection
			=> Generate questions that are as specific to the disease as possible
		//Most prolly fever
			=> Suggest medication for fever

	Notes:

	You'll know what queries and mutations are possible by running the server (connected to an ArangoDB) and going on http://localhost:8085 - which is the ORM server and clicking on the Docs.

	Technically, its improbable to be 100% accurate or get the right disease every time