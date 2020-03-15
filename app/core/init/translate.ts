// @ts-nocheck
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'

import en from '../../assets/languages/en.json'
import hi from '../../assets/languages/hi.json'

i18n
	.use(initReactI18next)
	.init({
		lng: Localization.locale,
		load: 'languageOnly',
		fallbackLng: 'en',
		resources: {
			en,
			hi
		},
		// resources: {},
		debug: true,
		interpolation: {
			escapeValue: false
		}
	})

// i18n.addResourceBundle(Localization.locale, '', await import(`../../assets/languages/${Localization.locale}.json`))

export default i18n