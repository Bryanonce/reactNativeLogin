import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/routes/DrawerNavigator';
import { LoginStackNavigator } from './src/routes/LoginStackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <LoginStackNavigator />
    </NavigationContainer>
  )
}
