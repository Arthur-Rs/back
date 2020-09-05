import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// => Hooks
import { useTheme } from '../hooks/useTheme'

// => Screens

import Home from '../screens/Financies/Home'
import SelectType from '../screens/Financies/Creation'
import CreateTransaction from '../screens/Financies/Transactions/Create'

import CreateGoal from '../screens/Financies/Goals/Create'
import DashboardGoal from '../screens/Financies/Goals/Dashboard'

import CreateFinance from '../screens/Financies/Management/Create'

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator()
  const { theme } = useTheme()
  return (
    <Navigator
      initialRouteName="home"
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.backgroundDark,
        },
      }}>
      <Screen name="home" component={Home} />
      <Screen name="select-type" component={SelectType} />
      <Screen name="create-transaction" component={CreateTransaction} />

      <Screen name="dashboard-goal" component={DashboardGoal} />
      <Screen name="create-goal" component={CreateGoal} />
      <Screen name="create-finance" component={CreateFinance} />
    </Navigator>
  )
}

export default AppRoutes
