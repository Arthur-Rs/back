/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, Text } from './styles'

interface ButtomProps extends RectButtonProperties {
  name: string
  icon?: React.FunctionComponent
}

const TypeButton: React.FC<ButtomProps> = ({
  children,
  icon: Icon,
  name,
  ...rest
}) => (
  <Container enabled {...rest}>
    {Icon && <Icon />}
    <Text>
      {name}
      {children}
    </Text>
  </Container>
)

export default TypeButton
