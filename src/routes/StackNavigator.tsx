import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DashBoard } from '../screens/DashBoard';
import { Payment } from '../screens/Payment';
import { StackNavigatorType } from '../types/NavigationTypes';

const Stack = createStackNavigator<StackNavigatorType>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DashBoard" options={{headerShown: false}} component={DashBoard} />
            <Stack.Screen name="Payment" options={{headerShown: false}} component={Payment} />
        </Stack.Navigator>
    )
}
