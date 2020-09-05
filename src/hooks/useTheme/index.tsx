import React, {
  useCallback,
  useContext,
  useState,
  createContext,
  useEffect,
} from 'react'
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components/native'
import { useProfile } from '../useProfile'
import darkTheme from '../../themes/dark'
import lightTheme from '../../themes/light'

interface Context {
  theme: DefaultTheme
  alterTheme(keyTheme: 'dark' | 'light'): Promise<void>
}

const contextTheme = createContext<Context>({} as Context)

const useTheme = (): Context => {
  const context = useContext(contextTheme)

  if (!context) {
    throw Error('')
  }

  return context
}

const themes = {
  dark: darkTheme,
  light: lightTheme,
}

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.dark)
  const { updateProfile } = useProfile()

  useEffect(() => {
    setTheme(darkTheme)
  }, [])

  const alterTheme = useCallback(
    async (keyTheme: 'dark' | 'light') => {
      await updateProfile({
        key: 'theme',
        value: keyTheme,
      })
      setTheme(themes[keyTheme])
    },
    [updateProfile],
  )

  return (
    <contextTheme.Provider value={{ theme, alterTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </contextTheme.Provider>
  )
}

export { ThemeProvider, useTheme }
