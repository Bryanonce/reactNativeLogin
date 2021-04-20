import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { DrawerNavigator } from './DrawerNavigator';
import { LoginStackNavigatorType } from '../types/NavigationTypes';
import { Loading } from '../components/Loading';

const Stack = createStackNavigator<LoginStackNavigatorType>();

export const LoginStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Loading">
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
    )
}
