import {
  Svg, Path, Circle, SvgProps,
} from 'react-native-svg';

import React from 'react';

interface Props extends SvgProps{
  color?:string
}

const AddCircle: React.FC<Props> = ({ ...rest }) => (
  <Svg width="64" height="64" viewBox="0 0 64 64" fill="none" {...rest}>
    <Circle cx="31.665" cy="31.665" r="25" fill="#DCDCDC" />
    <Path d="M31.6667 5C16.9467 5 5 16.9467 5 31.6667C5 46.3867 16.9467 58.3333 31.6667 58.3333C46.3867 58.3333 58.3333 46.3867 58.3333 31.6667C58.3333 16.9467 46.3867 5 31.6667 5ZM42.3333 34.3333H34.3333V42.3333C34.3333 43.8 33.1333 45 31.6667 45C30.2 45 29 43.8 29 42.3333V34.3333H21C19.5333 34.3333 18.3333 33.1333 18.3333 31.6667C18.3333 30.2 19.5333 29 21 29H29V21C29 19.5333 30.2 18.3333 31.6667 18.3333C33.1333 18.3333 34.3333 19.5333 34.3333 21V29H42.3333C43.8 29 45 30.2 45 31.6667C45 33.1333 43.8 34.3333 42.3333 34.3333Z" fill="#6348B1" />
  </Svg>

);
export default AddCircle;
