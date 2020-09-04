import {
  Svg, Path, SvgProps,
} from 'react-native-svg';

import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface Props extends SvgProps{
  focused: boolean
}

const AddCircle: React.FC<Props> = ({ focused, ...rest }) => {
  const { theme } = useTheme();

  return (
    <Svg width="95" height="95" viewBox="0 0 95 95" fill="none" {...rest}>
      <Path d="M79.4557 12.4374H3.29968V71.0189H79.4557V12.4374ZM73.5975 65.1608H9.15784V18.2955H73.5975V65.1608Z" fill={focused ? theme.colors.primary : theme.colors.text} />
      <Path d="M85.3138 27.0828V76.8771H17.945V82.7352H91.1719V27.0828H85.3138Z" fill={focused ? theme.colors.primary : theme.colors.text} />
      <Path d="M41.3776 56.0917C48.6454 56.0917 54.5585 49.6592 54.5585 41.7527C54.5585 33.8462 48.6454 27.4138 41.3776 27.4138C34.1099 27.4138 28.1968 33.8461 28.1968 41.7527C28.1968 49.6594 34.1099 56.0917 41.3776 56.0917ZM41.3776 33.272C45.4154 33.272 48.7003 37.0765 48.7003 41.7527C48.7003 46.429 45.4154 50.2335 41.3776 50.2335C37.3399 50.2335 34.0549 46.429 34.0549 41.7527C34.0549 37.0765 37.3399 33.272 41.3776 33.272Z" fill={focused ? theme.colors.primary : theme.colors.text} />
      <Path d="M15.0159 25.6182H20.8741V57.838H15.0159V25.6182Z" fill={focused ? theme.colors.primary : theme.colors.text} />
      <Path d="M61.8812 25.6182H67.7393V57.838H61.8812V25.6182Z" fill={focused ? theme.colors.primary : theme.colors.text} />
    </Svg>
  );
};
export default AddCircle;
