import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

interface Props extends SvgProps{
  color:string
}

const Menu: React.FC<Props> = ({ color, ...rest }) => (
  <Svg {...rest} viewBox="0 0 79 79">
    <Path d="M13.9067 35.9589H58.5403V42.4679H13.9067V35.9589ZM13.9067 19.6862H65.9792V26.1953H13.9067V19.6862ZM13.9067 58.7406H48.6116V52.2315H13.9067V58.7406Z" fill={color} />
  </Svg>
);
export default Menu;
