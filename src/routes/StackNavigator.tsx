import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { DashBoard } from '../screens/DashBoard';
import { Payment } from '../screens/Payment';
import { StackNavigatorType } from '../types/NavigationTypes';

const Stack = createStackNavigator<StackNavigatorType>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DashBoard" component={DashBoard} />
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
    )
}
