import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { LoginStackNavigatorType } from '../types/NavigationTypes'
import LinearGradient from 'react-native-linear-gradient';
import { cardStyle } from '../themes/ComponentStyles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {globalScreen} from '../themes/GlobalStyles'

//Imports UI Icons
import Icon from 'react-native-vector-icons/FontAwesome';

interface PropsStack extends StackScreenProps<LoginStackNavigatorType, 'Login'>{}

export const Login = ({navigation}:PropsStack) => {

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    })

    return (
        <LinearGradient colors={['#C5CAE9', '#1A237E']} style={cardStyle.linearGradient}>
            <View style={cardStyle.loginCard}>
                <Image style={[globalScreen.imgLogo,{alignSelf: 'center', top: -70}]} source={require('../resources/logo.jpg')} />
                <View style={globalScreen.inputContainer}>
                    <TextInput style={cardStyle.loginInput}></TextInput>
                    <Image style={globalScreen.icons} source={require('../resources/user-circle-solid.jpg')} />
                </View>

                <View style={globalScreen.inputContainer}>
                    <TextInput style={cardStyle.loginInput} secureTextEntry={true} ></TextInput>
                    <Image style={globalScreen.icons} source={require('../resources/key-solid.jpg')} />
                </View>
                
                <TouchableOpacity
                    style={cardStyle.buttonLogin}
                >
                    <Text style={cardStyle.textButtonLogin}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}
