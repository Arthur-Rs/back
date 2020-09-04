import styled, { css } from 'styled-components/native';

interface TextProps{

  size:string
  pedLeft: boolean
  pedRight: boolean

}

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background};
  height: 110px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  z-index: 16;

  padding-top: 10px;
  padding-left : 15px;
  padding-right : 15px;

  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

export const Space = styled.View`
  width: 45px;
  height: 45px;
`;

export const Title = styled.Text<TextProps>`
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css` font-size: 30px;`;
        break;
      case 'medium':
        return css` font-size: 36px;`;
        break;
      case 'langer':
        return css` font-size: 38px;`;
        break;
      default:
        return css` font-size: 36px;`;
        break;
    }
  }}
  


  
  color: ${({ theme }) => theme.colors.text};
`;
