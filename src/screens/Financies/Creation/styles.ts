import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.backgroundDark};
`

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.background};
  height: 100px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 10px;
  padding-left: ${({ theme }) => theme.layout.others.distance};
  padding-right: ${({ theme }) => theme.layout.others.distance};

  border-bottom-left-radius: ${({ theme }) => theme.layout.header.borderRadius};
  border-bottom-right-radius: ${({ theme }) =>
    theme.layout.header.borderRadius};
`

export const Main = styled.View`
  flex: 1;

  align-items: center;
  justify-content: flex-start;

  padding-left: ${({ theme }) => theme.layout.others.distance};
  padding-right: ${({ theme }) => theme.layout.others.distance};

  margin-top: ${({ theme }) => theme.layout.others.distance};
  margin-bottom: ${({ theme }) => theme.layout.others.distance};
`

export const Title = styled.Text`
  font-size: 36px;
  padding-right: 38px;
  color: ${({ theme }) => theme.colors.text};
`
