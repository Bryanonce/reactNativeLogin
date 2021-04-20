import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Menu } from '../screens/Menu';
import { DrawerNavigatorType } from '../types/NavigationTypes';

const Drawer = createDrawerNavigator<DrawerNavigatorType>();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen name="Main" component={StackNavigator} />
            <Drawer.Screen name="Menu" component={Menu} />
        </Drawer.Navigator>
    )
}
