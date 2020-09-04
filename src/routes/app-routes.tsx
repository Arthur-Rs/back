import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';

// =>Hooks
import { useTheme } from '../hooks/useTheme';

// => Routes
import FinancesRoutes from './finance-routes';

// => Icons
import NotesIcon from '../assets/icons/notes.svg';
import ProfileIcon from '../assets/icons/profile.svg';
import TasksIcon from '../assets/icons/tasks.svg';
import FinanciesIcon from '../assets/icons/financies.svg';

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  const { theme } = useTheme();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="dashboard"
        tabBarOptions={{
          showLabel: false,
          keyboardHidesTabBar: true,
          style: {
            height: 65,
            borderTopWidth: 0,
          },
          tabStyle: {

            backgroundColor: theme.colors.background,
          },
          iconStyle: {
            width: 45,
            height: 45,
          },
        }}
      >
        <Screen
          name="notes"
          component={Dashboard}
          options={{
            tabBarIcon: (({ focused }) => (
              <NotesIcon
                fill={theme.colors.text}
                opacity={focused ? 1 : 0.6}
              />
            )),
          }}
        />
        <Screen
          name="tasks"
          component={Dashboard}
          options={{
            tabBarIcon: (({ focused }) => (
              <TasksIcon
                fill={theme.colors.text}
                opacity={focused ? 1 : 0.6}
              />
            )),
          }}
        />
        <Screen
          name="financies"
          component={FinancesRoutes}
          options={{
            tabBarIcon: (({ focused }) => (
              <FinanciesIcon
                fill={theme.colors.text}
                opacity={focused ? 1 : 0.6}
              />
            )),
          }}
        />
        <Screen
          name="dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: (({ focused }) => (
              <ProfileIcon
                fill={theme.colors.text}
                opacity={focused ? 1 : 0.6}
              />
            )),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
