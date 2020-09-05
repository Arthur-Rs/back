import styled from 'styled-components/native'
// import AddCircle from '../../../assets/icons/AddCircle'
import { Form as UNForm } from '@unform/mobile'
import JButton from '../../../components/controllers/Button'
import { Dimensions, StatusBar } from 'react-native'

export const Container = styled.View`
  flex: 1;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.backgroundDark};
  height: ${Dimensions.get('window').height - (StatusBar.currentHeight || 0)}px;
`

export const Profile = styled.View`
  height: 275px;
  background: ${({ theme }) => theme.colors.background};

  align-items: center;
  justify-content: center;

  border-bottom-left-radius: ${({ theme }) => theme.layout.header.borderRadius};
  border-bottom-right-radius: ${({ theme }) =>
    theme.layout.header.borderRadius};
`

export const ImageProfile = styled.Image`
  border-radius: 999px;
  margin-bottom: ${({ theme }) => theme.layout.others.distance};
  height: 145px;
  width: 145px;

  border-width: 4px;
  border-color: ${({ theme }) => theme.colors.primary};
`
export const TextProfile = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 32px;
`

export const Form = styled(UNForm)`
  padding-left: ${({ theme }) => theme.layout.others.distance};
  padding-right: ${({ theme }) => theme.layout.others.distance};

  margin-top: ${({ theme }) => theme.layout.others.distance};
  margin-bottom: ${({ theme }) => theme.layout.others.distance};

  flex: 1;
  z-index: 16;
  height: 100%;
  justify-content: space-between;
`

export const IconAddImage = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const Button = styled(JButton)``
