import React, {useCallback} from 'react';
import {StatusBar as ExpoStatusBar, StatusBarProps} from 'react-native';

// => hooks
import {useTheme} from '../../../hooks/useTheme';

type StatusColors = 'light-content' | 'dark-content' | 'default' | undefined;

const StatusBar: React.FC<StatusBarProps> = ({...rest}) => {
  const {theme} = useTheme();

  const getStatusBarStyles = useCallback((): StatusColors => {
    if (theme.name === 'dark') {
      return 'light-content';
    }

    return 'dark-content';
  }, [theme.name]);

  return (
    <ExpoStatusBar
      barStyle={getStatusBarStyles()}
      animated
      backgroundColor={theme.colors.background}
      {...rest}
    />
  );
};

export default StatusBar;
