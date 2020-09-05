import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.backgroundDark};
`

export const Profile = styled.View`
  height: 280px;
  background: ${({ theme }) => theme.colors.background};

  align-items: center;
  justify-content: center;

  border-bottom-left-radius: ${({ theme }) => theme.layout.header.borderRadius};
  border-bottom-right-radius: ${({ theme }) =>
    theme.layout.header.borderRadius};
`

export const HeaderProfile = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 5px;
  padding-left: 15px;
  padding-right: 15px;
`

export const ImageProfile = styled.Image`
  border-radius: 999px;
  margin-bottom: 12px;
  margin-top: -15px;
  height: 138px;
  width: 138px;

  border-width: 4px;
  border-color: ${({ theme }) => theme.colors.primary};
`
export const TextProfile = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 36px;
`
