import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors.backgroundDark};
`

export const Main = styled.View`
  flex: 1;

  height: 100%;
  padding-left: ${({ theme }) => theme.layout.others.distance};
  padding-right: ${({ theme }) => theme.layout.others.distance};
  padding-top: 15px;
`
