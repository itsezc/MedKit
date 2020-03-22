import pyttsx3
def onStart(name):
	engine = pyttsx3.init()
	# engine.setProperty('voice',voice[1].id)
	engine.setProperty('rate', 180)
	# engine.connect('started-utterance',onStart)
	engine.say('It works! Indentation and bugs fixed')
	engine.runAndWait()

onStart('Chiru')
