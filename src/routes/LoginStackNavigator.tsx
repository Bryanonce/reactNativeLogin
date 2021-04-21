import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { DrawerNavigator } from './DrawerNavigator';
import { Loading } from '../screens/Loading';
import { LoginStackNavigatorType } from '../types/NavigationTypes';

const Stack = createStackNavigator<LoginStackNavigatorType>();

export const LoginStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Loading" options={{headerShown: false}} component={Loading} />
            <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
            <Stack.Screen name="DrawerNavigator" options={{headerShown: false}} component={DrawerNavigator} />
        </Stack.Navigator>
    )
}
