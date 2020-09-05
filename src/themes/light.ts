import { DefaultTheme } from 'styled-components/native'

const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    primary: '#836DC5',

    backgroundDark: '#cfcfcf',
    background: '#e3e3e3',
    backgroundLight: '#fdfdfd',

    income: '#3A985F',
    outcome: '#9C3939',

    text: '#393939',
    textWhite: '#DCDCDC',
    textGray: '#919191',
  },
  layout: {
    header: {
      borderRadius: '32px',
    },
    others: {
      borderRadius: '12px',
      distance: '15px',
    },
  },
}

export default lightTheme
