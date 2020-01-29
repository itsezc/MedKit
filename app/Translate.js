import * as Localize from 'react-native-localize'

import i18N from 'i18next'
import { initReactI18next } from 'react-i18next'

import LANG_EN from './assets/languages/en.json'
import LANG_ES from './assets/languages/es.json'
import LANG_HI from './assets/languages/hi.json'
import LANG_TA from './assets/languages/ta.json'

const resources = {
	en: LANG_EN,
	es: LANG_ES,
	hi: LANG_HI,
	ta: LANG_TA
}

const fallback = { languageCode: 'en', isRTL: false }
const { languageTag, isRTL } = Localize.findBestAvailableLanguage(Object.keys(resources))

i18N
	.use(initReactI18next)
	.init({
		resources,
		lng: languageTag,
		keySeparator: false,
		interpolation: {
			escapeValue: false
		}
	})

export default i18N