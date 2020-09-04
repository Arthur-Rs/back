import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding-top: 15px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;

export const Content = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.text};
  
`;
