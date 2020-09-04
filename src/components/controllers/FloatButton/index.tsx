import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { useTheme } from '../../../hooks/useTheme';

import {
  Container,
  Button,
} from './styles';

import AddIcon from '../../../assets/icons/add.svg';

const Add: React.FC<RectButtonProperties> = ({ ...rest }) => {
  const { theme } = useTheme();
  return (
    <Container>
      <Button {...rest}>
        <AddIcon width={24} height={24} fill={theme.colors.text} />
      </Button>
    </Container>
  );
};
export default Add;
