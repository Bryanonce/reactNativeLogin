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
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
    )
}
