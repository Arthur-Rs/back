import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { useTheme } from '../../../hooks/useTheme';

import {
  Container,
} from './styles';

import AddIcon from '../../../assets/icons/add.svg';

const Add: React.FC<RectButtonProperties> = ({ ...rest }) => {
  const { theme } = useTheme();
  return (
    <Container {...rest}>
      <AddIcon width={24} height={24} fill={theme.colors.text} />
    </Container>
  );
};
export default Add;
