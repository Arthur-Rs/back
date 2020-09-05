import React from 'react'
import { TouchableOpacityProperties } from 'react-native'

import { Container, Text } from './styles'

interface ButtomProps extends TouchableOpacityProperties {
  name: string
}

const Button: React.FC<ButtomProps> = ({ children, name, ...rest }) => (
  <Container {...rest}>
    <Text>
      {name}
      {children}
    </Text>
  </Container>
)

export default Button
