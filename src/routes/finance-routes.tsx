import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// => Hooks
import { useTheme } from '../hooks/useTheme';

// => Screens

import Home from '../screens/Financies/Home';
import SelectType from '../screens/Financies/SelectType';

import CreateGoal from '../screens/Financies/Goal/CreateGoal';
import DashboardGoal from '../screens/Financies/Goal/Dashboard';

import CreateFinance from '../screens/Financies/Financies/CreateFinance';

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();
  const { theme } = useTheme();
  return (
    <Navigator
      initialRouteName="home"
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.backgroundDark,
        },
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="select-type" component={SelectType} />

      <Screen name="dashboard-goal" component={DashboardGoal} />
      <Screen name="create-goal" component={CreateGoal} />
      <Screen name="create-finance" component={CreateFinance} />
    </Navigator>
  );
};

export default AppRoutes;
