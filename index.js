import 'es6-symbol/implement'
import { AppRegistry, Platform } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'

if (Platform.OS === 'android') {
  require('intl')
  require('intl/locale-data/jsonp/pt-BR')
}

AppRegistry.registerComponent(appName, () => App)
