import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { DrawerNavigatorType } from '../types/NavigationTypes'

interface PropsDrawer extends DrawerScreenProps<DrawerNavigatorType, 'Main'>{}

export const DashBoard = ({navigation}:PropsDrawer) => {

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <View>
            <Text>Dash</Text>
        </View>
    )
}
