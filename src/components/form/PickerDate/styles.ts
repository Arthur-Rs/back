import styled, { css } from 'styled-components/native';

interface ContainerProps{
  focused: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  min-height:64px;
  background: ${({ theme }) => theme.colors.background};

  border-width: 2px;
  
  ${({ focused, theme }) => ((focused)
    ? css`border-color: ${theme.colors.primary};`
    : css`border-color: ${theme.colors.background};`)
}
  
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  height: 3px;
  width: 93%;
  position: absolute;
  bottom: 5%;
  background: ${({ theme }) => theme.colors.primary};
`;

export const DateText = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  padding: ${({ theme }) => theme.layout.others.distance};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin-bottom: 10px;
  width: 100%;
`;

export const EmptyDateText = styled.Text`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  opacity: 0.6;
  padding: ${({ theme }) => theme.layout.others.distance};
`;
