import React from 'react';
import { Switch as RNSwitch, SwitchProps } from 'react-native-switch';
import { useTheme } from '../../../hooks/useTheme';

export const Switch:React.FC<SwitchProps> = ({ ...rest }) => {
  const { theme } = useTheme();

  return (
    <RNSwitch
      disabled={false}
      circleSize={27}
      barHeight={28}
      backgroundActive={theme.colors.text}
      backgroundInactive={theme.colors.text}
      circleActiveColor={theme.colors.backgroundLight}
      circleInActiveColor={theme.colors.backgroundLight}
      innerCircleStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
      }}
      renderInActiveText={false}
      renderActiveText={false}
      switchLeftPx={2.1}
      switchRightPx={2.15}

      switchWidthMultiplier={2}
      switchBorderRadius={28}
      {...rest}
    />
  );
};
