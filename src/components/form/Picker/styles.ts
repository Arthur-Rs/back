import styled from 'styled-components/native';
import { Picker } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height:64px;
  background: ${({ theme }) => theme.colors.background};

  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const StylePicker = styled(Picker)`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  padding-left: ${({ theme }) => theme.layout.others.distance};
  padding-right: ${({ theme }) => theme.layout.others.distance};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin-bottom: 10px;
`;
