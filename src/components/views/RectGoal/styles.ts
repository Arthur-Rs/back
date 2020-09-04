import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 135px;
  width: 100%;

  margin-bottom: 15px;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
`;

export const CircleContainer = styled.View`
  width: 142px;
  align-items: center;
  justify-content:center;
`;
export const Content = styled.View`
  flex: 1;
  height: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 5px;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
`;
export const Ammount = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 26px;
`;

export const Goal = styled.Text`
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 12px;
`;

export const PercentText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`;

export const DateLimit = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;
