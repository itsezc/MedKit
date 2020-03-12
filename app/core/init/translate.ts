// @ts-nocheck
import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import { Localization } from 'expo-localization'

const languageDector = {
	type: 'languageDectector',
	async: true,
	detect: callback => {
		return Localization.getLocalizationAsync().then(({ locale }) => {
			callback(false)
		})
	},
	init: () => {},
	cacheUserLanguage: () => {}
}

i18n
	.use(languageDector)
	.use(reactI18nextModule)
	.init({
		fallbackLng: 'en',

		resources: {}
	})