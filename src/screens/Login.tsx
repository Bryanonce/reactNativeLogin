import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { LoginStackNavigatorType } from '../types/NavigationTypes'
import LinearGradient from 'react-native-linear-gradient';
import { cardStyle } from '../themes/ComponentStyles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {globalScreen} from '../themes/GlobalStyles'
import {UserDB} from '../DB/UserDB'
import { Controller, useController, useForm } from 'react-hook-form';

interface PropsStack extends StackScreenProps<LoginStackNavigatorType, 'Login'>{}

export const Login = ({navigation}:PropsStack) => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    
    const Input = ({name, control, password=false}:{name: string, control:any, password?: boolean})=>{
        
        return (
            <>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        !password ?
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                style={cardStyle.loginInput} />
                            :
                            <TextInput
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                style={cardStyle.loginInput}
                                secureTextEntry={true} />

                    )}
                    name={name}
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors.firstName && <Text>La propiedad es Requerida.</Text>}
            </>
            
        );
    }

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    });

    const onSubmit = (data:{user:string, password:string})=>{
        const usuarios = UserDB();
        usuarios.map((usuario)=>{
            if(usuario.user === data.user && usuario.password === data.password){
                navigation.navigate('DrawerNavigator');
            }
        })
    };

    return (
        <LinearGradient colors={['#C5CAE9', '#1A237E']} style={[cardStyle.linearGradient, {justifyContent: 'center', alignItems: 'center'}]}>
            <LinearGradient colors={['#E8EAF6', '#9FA8DA']} style={cardStyle.loginCard} >
                <Image style={[globalScreen.imgLogo, { alignSelf: 'center', top: -70 }]} source={require('../resources/logo.jpg')} />
                <View style={globalScreen.inputContainer}>
                    <Input name="user" control={control}  />
                    <Image style={globalScreen.icons} source={require('../resources/user-circle-solid.jpg')} />
                </View>

                <View style={globalScreen.inputContainer}>
                    <Input name="password" control={control} password={true}  />
                    <Image style={globalScreen.icons} source={require('../resources/key-solid.jpg')} />
                </View>

                <TouchableOpacity
                    style={cardStyle.buttonLogin}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={cardStyle.textButtonLogin}>Ingresar</Text>
                </TouchableOpacity>
            </LinearGradient>
        </LinearGradient>
    )
}
