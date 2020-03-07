export const Data = {

	__relations: [],

	Accounts: [
		`
			mutation {
				createAccount(
					input: {
						firstName: "Chiru",
						lastName: "Boggavarapu",
						email: "chirub@foretag.co",
						password: "$2y$14$.7eeAceLDesI7mDAMkI6cuAbiYba.wkngN5lAu8yTxSRKWvyayzJG",
						weight: 65,

					}
				) {
					id
					firstName
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
		`

	],

	Disease: [
		`
			mutation {
				createDisease(
					input: {
						name: "Fever",

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