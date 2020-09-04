import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 70px;
  width: 100%;
  opacity: 1;
  

  ${({ enabled }) => !enabled && css`
    opacity: 0.65;
  `}

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;

  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;

`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;
