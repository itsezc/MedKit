import pyttsx3
def onStart(name):
	engine = pyttsx3.init()
	voices = engine.getProperty('voices')
	engine.setProperty('voice',voices[7].id)
	engine.setProperty('rate', 180)
	engine.say('It works! Indentation and bugs fixed')
	engine.runAndWait()

onStart('Chiru')
