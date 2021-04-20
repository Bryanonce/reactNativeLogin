import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Menu } from '../screens/Menu';
import { DrawerNavigatorType, LoginStackNavigatorType } from '../types/NavigationTypes';
import { StackScreenProps } from '@react-navigation/stack';

const Drawer = createDrawerNavigator<DrawerNavigatorType>();

interface PropsStack extends StackScreenProps<LoginStackNavigatorType, 'DrawerNavigator'>{}

export const DrawerNavigator = ({navigation}:PropsStack) => {
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[])
    
    return (
        <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen name="Main" component={StackNavigator} />
            <Drawer.Screen name="Menu" component={Menu} />
        </Drawer.Navigator>
    )
}
