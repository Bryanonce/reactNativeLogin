import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { LoginStackNavigator } from './src/routes/LoginStackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <LoginStackNavigator />
    </NavigationContainer>
  )
}
