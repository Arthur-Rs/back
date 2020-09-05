import React from 'react'
import { ThemeProvider } from './useTheme'
import { ProfileProvider } from './useProfile'
import { StorageProvider } from './useStorage'

const AppProvider: React.FC = ({ children }) => (
  <StorageProvider>
    <ProfileProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ProfileProvider>
  </StorageProvider>
)

export default AppProvider
