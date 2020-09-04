import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  position: absolute;
  border-radius: 999px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-top: 8px;

  background: ${({ theme }) => theme.colors.primary};

  bottom: 20px;
  right: 20px;
`;

export const Button = styled(RectButton)`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;
