import {
  Svg, Path, SvgProps,
} from 'react-native-svg';

import React from 'react';

import { useTheme } from '../../hooks/useTheme';

const Goal: React.FC<SvgProps> = ({ ...rest }) => {
  const { theme } = useTheme();
  return (
    <Svg width="38" height="38" viewBox="0 0 55 55" fill="none" {...rest}>
      <Path d="M28.1393 53.6488C42.9114 53.6488 54.8866 41.6736 54.8866 26.9015C54.8866 12.1294 42.9114 0.154297 28.1393 0.154297C13.3672 0.154297 1.39209 12.1294 1.39209 26.9015C1.39209 41.6736 13.3672 53.6488 28.1393 53.6488Z" fill={theme.colors.backgroundLight} />
      <Path d="M28.1392 5.50372C39.9567 5.50372 49.537 15.084 49.537 26.9015C49.537 38.719 39.9567 48.2993 28.1392 48.2993C16.3218 48.2993 6.74146 38.719 6.74146 26.9015C6.74146 15.084 16.3218 5.50372 28.1392 5.50372Z" fill={theme.colors.background} />
      <Path fillRule="evenodd" clipRule="evenodd" d="M28.1394 10.8531C37.0029 10.8531 44.1878 18.038 44.1878 26.9015C44.1878 35.7645 37.0029 42.9498 28.1394 42.9498C19.2759 42.9498 12.0911 35.7645 12.0911 26.9015C12.0911 18.038 19.2759 10.8531 28.1394 10.8531Z" fill={theme.colors.backgroundLight} />
      <Path d="M28.1391 16.2026C34.0481 16.2026 38.838 20.993 38.838 26.9015C38.838 32.8099 34.0481 37.6004 28.1391 37.6004C22.2301 37.6004 17.4402 32.8099 17.4402 26.9015C17.4402 20.993 22.2301 16.2026 28.1391 16.2026Z" fill={theme.colors.background} />
      <Path fillRule="evenodd" clipRule="evenodd" d="M28.1392 21.5521C31.0937 21.5521 33.4887 23.947 33.4887 26.9015C33.4887 29.8555 31.0937 32.251 28.1392 32.251C25.1847 32.251 22.7898 29.8555 22.7898 26.9015C22.7898 23.947 25.1847 21.5521 28.1392 21.5521Z" fill={theme.colors.backgroundLight} />
    </Svg>
  );
};
export default Goal;
