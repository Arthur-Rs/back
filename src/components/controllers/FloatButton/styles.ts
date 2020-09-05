import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  position: absolute;
  border-radius: 999px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary};

  bottom: 20px;
  right: 20px;
`
