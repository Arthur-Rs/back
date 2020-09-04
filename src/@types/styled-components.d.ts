import 'styled-components/native';

declare module 'styled-components/native'{
  export interface DefaultTheme{
    name: string
    colors:{
      primary:string

      backgroundDark:string
      background:string
      backgroundLight:string

      income:string
      outcome:string

      text:string
      textWhite: string
      textGray: string
    }
    layout:{
      header: {
        borderRadius:string
      }
      others: {
        borderRadius:string
        distance: string
      }
    }
  }
}
