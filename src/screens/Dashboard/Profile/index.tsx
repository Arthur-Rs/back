import React, { useState, useCallback } from 'react'
import { Switch } from '../../../components/controllers/Switch'

import {
  Container,
  Profile,
  ImageProfile,
  TextProfile,
  HeaderProfile,
} from './styles'

// => hooks
import { useTheme } from '../../../hooks/useTheme'
import { useProfile, Profile as IProfile } from '../../../hooks/useProfile'

// => Imagens
import ProfileImg from '../../../assets/images/profile.jpeg'

// => icons
import MenuIcon from '../../../assets/icons/menu.svg'

const Dashboard: React.FC = () => {
  const { theme, alterTheme } = useTheme()
  const { data } = useProfile() as { data: IProfile }

  const [isDark, setIsDark] = useState(data.theme === 'dark')

  const handleUpdateTheme = useCallback(async () => {
    await alterTheme(!isDark ? 'dark' : 'light')
    setIsDark(!isDark)
  }, [alterTheme, isDark])

  return (
    <Container>
      <Profile>
        <HeaderProfile>
          <MenuIcon width={32} height={32} fill={theme.colors.text} />
          <Switch onValueChange={handleUpdateTheme} value={isDark} />
        </HeaderProfile>
        <ImageProfile
          source={data.image === 'default' ? ProfileImg : { uri: data.image }}
        />
        <TextProfile>{data.name}</TextProfile>
      </Profile>
    </Container>
  )
}

export default Dashboard
