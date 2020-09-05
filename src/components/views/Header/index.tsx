import React, { useCallback } from 'react'

import { useNavigation } from '@react-navigation/native'
import { Container, Space, Title } from './styles'

// Buttons
import AddButton from '../../controllers/Add'
import GoBackButton from '../../controllers/GoBack'

interface HeaderProps {
  title: string
  addButton?: boolean
  goBackButton?: boolean
  titleSize?: 'small' | 'medium' | 'langer'
  route?: string
}

const Header: React.FC<HeaderProps> = ({
  title,
  titleSize = 'medium',
  addButton = false,
  goBackButton = false,
  route = '',
}) => {
  const { navigate } = useNavigation()

  const handleAddButtonPress = useCallback(() => {
    navigate(route)
  }, [navigate, route])

  return (
    <Container>
      {goBackButton ? <GoBackButton /> : <Space />}

      <Title pedLeft={goBackButton} pedRight={addButton} size={titleSize}>
        {title}
      </Title>

      {addButton ? <AddButton onPress={handleAddButtonPress} /> : <Space />}
    </Container>
  )
}

export default Header
