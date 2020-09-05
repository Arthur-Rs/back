import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'

// #region Interfaces

interface InputAreaProps {
  focused: boolean
}

interface ContainerProps {
  paddingTop: number
  paddingBottom: number
}

// #endregion

export const Container = styled.View<ContainerProps>`
  padding-top: ${({ paddingTop }) => paddingTop}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
`

export const InputArea = styled.View<InputAreaProps>`
  width: 100%;
  min-height: 64px;
  background: ${({ theme }) => theme.colors.background};

  border-width: 2px;

  ${({ focused, theme }) =>
    focused
      ? css`
          border-color: ${theme.colors.primary};
        `
      : css`
          border-color: ${theme.colors.background};
        `}

  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Line = styled.View`
  height: 3px;
  width: 93%;
  position: absolute;
  bottom: 5%;
  background: ${({ theme }) => theme.colors.primary};
`

export const InputText = styled(TextInput)`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 22px;
  padding: ${({ theme }) => theme.layout.others.distance};
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin-bottom: 10px;
  width: 100%;
`

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.outcome};
  margin-top: 2px;
  font-size: 14px;
  width: 100%;
`
