import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  height: 60px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`

export const Text = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textWhite};
`
