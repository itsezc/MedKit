
1) User select Symptom(s) from the App

2) Identify all possible diseases based on Symptoms provided

3) Filter the diseases based on MODE of the symptoms

4) Ask the user questions about each symptom of those diseases and store the answers as a hash

	Disease #1 (Common Cold)

	Do you cough? Yes 
	When did you start coughing? 1 week ago
	Do you sneeze? Yes
	Do you have a high temperature? Yes


	Disease #2 (Asthma)
	
	Do you cough? Yes
	When did you start coughing? 1 week ago
	Do you wheeze when breathing? Yes

5) Identify if the user is suffering from the (possible) diseases as a percentage

Display: 

	Likely - Diseases


Note:
	* Getting really complicated

	Why not ask the user for a Symptom and then filter all the other symptoms based on the initial symptom by searching for all diseases and all the other symptoms.
	
	This prevents alot of processing!

	This makes generation of a list of possibilities / results much more relatable to the symptoms.

	i.e. User selects Cough, the only avaliable options would be Weezing, Sneezing, High Temperature etc. suggest these to the user
	
	If then the User selects Sneezing, then filter out Diseases (with both the symptoms) and then further filter the searchable symptoms
 
	Eventually ... If there is only one disease possible then its that Disease

	If there are still multiple diseases, ask if the user has the additional symptoms of those diseases and Filter

	If the user cannot confirm, then apply machine learning
