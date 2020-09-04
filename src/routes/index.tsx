import React from 'react';
import { useProfile } from '../hooks/useProfile';

// => Screens
import Welcome from '../screens/Welcome';
import AppRoutes from './app-routes';

const Routes: React.FC = () => {
  const { data } = useProfile();

  return data.name ? <AppRoutes /> : <Welcome />;
};

export default Routes;
