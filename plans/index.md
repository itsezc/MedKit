### Search

Intitially the user searches for a symptom that they have

Option A: allSymptoms(filter: { name_like: $term })
Option B: allSymptoms(filter: { name: $term })

### Identification

Fetch the diseases[] assosicated with symptom

Option A / Option B {
	diseases {
		id
		_symptomsMeta {
			count
		}
	}
}

- Store all diseases[]:ID on the session (Clients Device)

*Storing question data client side means that a resync if there is a network problem is much easier*

### Questions / Diagnosis

Example: 

After Identifying, two diseases and their symptoms

(D) Cold
	(S) Sneezing
	(S) High Temp
	(S) Coughing

(D) Chest Infection
	(S) Coughing
	(S) Hard to Breathe

