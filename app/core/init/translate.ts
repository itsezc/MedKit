// @ts-nocheck
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'

import en from '../../assets/languages/en.json'
import hi from '../../assets/languages/hi.json'

i18n
	.use(initReactI18next)
	.init({
		// lng: Localization.locale,
		lng: 'hi',
		load: 'languageOnly',
		fallbackLng: 'en',
		resources: {
			en,
			hi
		},
		debug: true,
		interpolation: {
			escapeValue: false
		}
	})
export default i18n