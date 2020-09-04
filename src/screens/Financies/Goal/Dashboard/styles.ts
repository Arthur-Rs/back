import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  
`;

export const Body = styled.View`
  padding-left: 15px;
  padding-right: 15px;

  margin-bottom: 15px;
`;

export const PercentText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 32px;
  margin-bottom: 10px;
`;

export const AmountText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.4;
  font-size: 14px;

  width: 100%;
  margin-top: -5px;
  
  align-items:center;
  justify-content:center;
  text-align: center;
`;
