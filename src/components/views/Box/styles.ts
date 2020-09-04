import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  min-height: 100px;

  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;

  margin-top: 15px;
`;
export const Header = styled.View`

  align-items: center;
  justify-content: center;
`;
export const BorderBottom = styled.View`
  width: 85%;
  background: #000;
  opacity: 0.15;
  border-radius: 3px;
  height: 3px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 26px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
export const Body = styled.View`

  align-items: center;
  justify-content:center;
  padding: 15px;
`;
