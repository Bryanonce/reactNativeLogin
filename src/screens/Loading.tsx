import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native'
import * as Progress from 'react-native-progress';
import { globalScreen } from '../themes/GlobalStyles'
import { LoginStackNavigatorType } from '../types/NavigationTypes'

interface PropsDrawer extends StackScreenProps<LoginStackNavigatorType, 'Loading'>{}

export const Loading = ({navigation}:PropsDrawer) => {

    const [loading, setLoading] = useState<number>(0)

    const load = async ()=>{
        const timer = (ms:number) => new Promise(res => setTimeout(res, ms))
        for(let i=1; i<=10; i++){
            setLoading((i*10)/100)
            await timer(500)
        }
        navigation.navigate('Login');
    }

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
        console.log('Cargando')

        load()
    },[])

    return (
        <View
            style={[globalScreen.whiteCenter, {backgroundColor: '#DA0073'}]}
        >
            <Image 
                style={globalScreen.imgLogo}
                source={require('../resources/BGlogo.jpg')}
            />
            <Progress.Circle size={200} progress={loading} />

        </View>
    )
}
