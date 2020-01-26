import AsyncStorageFactor from '@react-native-community/async-storage'
import LegacyStorage from '@react-native-community/async-storage-backend-legacy'

const legacyStorage = new LegacyStorage()

const storage = AsyncStorageFactor.create(legacyStorage)

export default storage
