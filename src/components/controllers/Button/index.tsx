import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, Text} from './styles';

interface ButtomProps extends RectButtonProperties {
  name: string;
}

const Button: React.FC<ButtomProps> = ({children, name, ...rest}) => (
  <Container enabled {...rest}>
    <Text>
      {name}
      {children}
    </Text>
  </Container>
);

export default Button;
