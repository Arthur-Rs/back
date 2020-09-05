import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { useTheme } from '../../../hooks/useTheme'

import { Container } from './styles'

import AddIcon from '../../../assets/icons/add.svg'

const Add: React.FC<TouchableOpacityProps> = ({ ...rest }) => {
  const { theme } = useTheme()
  return (
    <Container {...rest}>
      <AddIcon width={24} height={24} fill={theme.colors.textWhite} />
    </Container>
  )
}
export default Add
