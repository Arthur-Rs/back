import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import AppProvider from './hooks'

// => Routes
import Routes from './routes'

// => components
import StatusBar from './components/app/StatusBar'

const App: React.FC = () => (
  <AppProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
      <StatusBar />
    </SafeAreaView>
  </AppProvider>
)

export default App
