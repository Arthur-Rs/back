import styled, { css } from 'styled-components/native'

interface TextProps {
  size: string
  pedLeft: boolean
  pedRight: boolean
}

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background};
  height: 100px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  z-index: 16;

  padding-left: 15px;
  padding-right: 15px;

  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`

export const Space = styled.View`
  width: 45px;
  height: 45px;
`

export const Title = styled.Text<TextProps>`
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          font-size: 30px;
        `
      case 'medium':
        return css`
          font-size: 36px;
        `
      case 'langer':
        return css`
          font-size: 38px;
        `
      default:
        return css`
          font-size: 36px;
        `
    }
  }}

  color: ${({ theme }) => theme.colors.text};
`
