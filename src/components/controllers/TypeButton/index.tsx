/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { SvgProps } from 'react-native-svg';
import { Container, Text } from './styles';

interface ButtomProps extends RectButtonProperties{
  name: string
  icon?: React.FunctionComponent<SvgProps>
}

const TypeButton: React.FC<ButtomProps> = ({
  children, icon: Icon, name, ...rest
}) => (
  <Container enabled {...rest}>
    {Icon && (
    <Icon style={{ marginRight: 15 }} />
    )}
    <Text>
      {name}
      {children}
    </Text>
  </Container>
);

export default TypeButton;
