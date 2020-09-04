import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../../hooks/useTheme';
import { Container } from './styles';

const GoBack: React.FC = () => {
  const { theme } = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container
      onPress={() => {
        goBack();
      }}
    >
      <Svg width="20" height="20" viewBox="0 0 48 48" fill="none">
        <Path fillRule="evenodd" clipRule="evenodd" d="M0.000244141 23.9999C0.000244141 22.3431 1.34339 20.9999 3.00025 20.9999H45.0003C46.6571 20.9999 48.0003 22.3431 48.0003 23.9999C48.0003 25.6568 46.6571 26.9999 45.0003 26.9999H3.00025C1.34339 26.9999 0.000244141 25.6568 0.000244141 23.9999Z" fill={theme.colors.text} />
        <Path fillRule="evenodd" clipRule="evenodd" d="M26.1216 0.878619C27.2932 2.05019 27.2932 3.94969 26.1216 5.12126L7.24289 24L26.1216 42.8786C27.2932 44.0502 27.2932 45.9497 26.1216 47.1213C24.95 48.2929 23.0505 48.2929 21.8789 47.1213L0.878924 26.1213C-0.292649 24.9497 -0.292649 23.0502 0.878924 21.8786L21.8789 0.878619C23.0505 -0.292954 24.95 -0.292954 26.1216 0.878619Z" fill={theme.colors.text} />
      </Svg>
    </Container>
  );
};
export default GoBack;
