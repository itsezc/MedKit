import Moment from 'moment'

export const Data = {

	__relations: [
		{
			type: 'Disease',
			Disease: {
				name: 'Common Cold'
			},
			Symptom: [
				{
					name: 'Feeling Cold'
				},
				{
					name: 'Cough'
				},
				{
					name: 'Runny nose'
				}
			],
			param: 'name',
			searchParam: 'Symptom'
		},
		{
			type: 'Disease',
			Disease: {
				name: 'Asthma'
			},
			Symptom: [
				{
					name: 'Cough'
				}
			],
			param: 'name',
			searchParam: 'Symptom'
		},
		{
			type: 'Disease',
			Disease: {
				name: 'Chest Infection'
			},
			Symptom: [
				{
					name: 'Cough'
				}
			],
			param: 'name',
			searchParam: 'Symptom'
		},
		{
			type: 'Disease',
			Disease: {
				name: 'COVID-19'
			},
			Symptom: [
				{
					name: 'Cough'
				},
				{
					name: 'Tiredness'
				},
				{
					name: 'Breathing difficulty'
				},
				{
					name: 'Runny nose'
				}
			],
			param: 'name',
			searchParam: 'Symptom'
		},
		{
			type: 'Disease',
			Disease: {
				name: 'Aphasia'
			},
			Symptom: [
				{
					name: 'Speaking difficulty'
				}
			],
			param: 'name',
			searchParam: 'Symptom'
		},
		{
			type: 'Account',
			Account: {
				email: 'chirub@foretag.co'
			},
			Activity: [
				{
					name: "20 Pushups"
				}
			],
			param: 'email',
			searchParam: 'Activitie'
		}
			
	],

	Accounts: [
		`
			mutation {
				createAccount(
					input: {
						firstName: "Chiru",
						lastName: "Boggavarapu",
						email: "chirub@foretag.co",
						password: "$2y$14$.7eeAceLDesI7mDAMkI6cuAbiYba.wkngN5lAu8yTxSRKWvyayzJG",
						weight: 65
					}
				) {
					id
					firstName
				}
			}
		`,

		`
			mutation {
				createAccount(
					input: {
						firstName: "Vrishin",
						lastName: "Patel",
						email: "vrishinp@foretag.co",
						password: "$2y$14$.7eeAceLDesI7mDAMkI6cuAbiYba.wkngN5lAu8yTxSRKWvyayzJG",
						weight: 45
					}
				) {
					id
					firstName
				}
			}
		`
	],

	Activities: [
		`
			mutation {
				createActivity(
					input: {
						name: "20 Pushups",
						tag: "Exercise",
						time: "${Moment(Moment().add(3, 'days')).utc().format()}"
					}
				) {
					id
					name
				}
			}
		`
	],

	Symptoms: [
		`
			mutation {
				createSymptom(
					input: {
						name: "Feeling Cold",
						description: "There is a chilling feeling"
					}
				) {
					id
					name
				}
			}
		`,

		`
			mutation {
				createSymptom(
					input: {
						name: "Cough",
						description: "There is constant coughing"
					}
				) {
					id
					name
				}
			}
		`,

		`
			mutation {
				createSymptom(
					input: {
						name: "Speaking difficulty",
						description: "Having trouble with verbal communication"
					}
				) {
					id
					name
				}
			}
		`,

		`
			mutation {
				createSymptom(
					input: {
						name: "Breathing difficulty",
						description: "Having trouble taking in air"
					}
				) {
					id
					name
				}
			}
		`,

		`
			mutation {
				createSymptom(
					input: {
						name: "Tiredness",
						description: "Feeling lazy"
					}
				) {
					id
					name
				}
			}
		`,

		`
			mutation {
				createSymptom(
					input: {
						name: "Runny nose",
						description: "Nose"
					}
				) {
					id
					name
				}
			}
		`

	],

	Disease: [
		`
			mutation {
				createDisease(
					input: {
						name: "Aphasia",

					}
				) {
					id
					name
				}
			}
		`,
		`
			mutation {
				createDisease(
					input: {
						name: "COVID-19",

					}
				) {
					id
					name
				}
			}
		`,
		`
			mutation {
				createDisease(
					input: {
						name: "Common Cold",
						
					}
				) {
					id
					name
				}
			}
		`,
		`
			mutation {
				createDisease(
					input: {
						name: "Asthma",
						
					}
				) {
					id
					name
				}
			}
		`,
		`
			mutation {
				createDisease(
					input: {
						name: "Chest Infection",
						
					}
				) {
					id
					name
				}
			}
		`
	],
	
}