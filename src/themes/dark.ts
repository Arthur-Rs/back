import { DefaultTheme } from 'styled-components/native';

const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    primary: '#6348B1',

    backgroundDark: '#252525',
    background: '#2E2E2E',
    backgroundLight: '#3A3A3A',

    income: '#3A985F',
    outcome: '#9C3939',

    text: '#DCDCDC',
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
};

export default darkTheme;
