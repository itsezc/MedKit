import * as Localize from 'react-native-localize'

import i18N from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
	en: {
		translation: {
			"Hello": "hello",
		}
	}
}

i18N
	.use(initReactI18next)
	.init({
		resources,
		lng: 'en',
		keySeparator: false,
		interpolation: {
			escapeValue: false
		}
	})

export default i18N