import * as Localize from 'react-native-localize'

import i18N from 'i18next'
import { initReactI18next } from 'react-i18next'

import LANG_EN from './assets/languages/en.json'
import LANG_TA from './assets/languages/ta.json'

const { languageTag, isRTL } = Localize.findBestAvailableLanguage(['en', 'es', 'hi', 'ta'])

import(`./assets/languages/${languageTag}.json`)
	.then((language) => {

		const resources = {}
		resources[languageTag] = { translation: language.translation }

		i18N
			.use(initReactI18next)
			.init({
				resources,
				lng: languageTag,
				fallbackLng: 'en',
				keySeparator: false,
				interpolation: {
					escapeValue: false
				}
			})
	})


	

export default i18N