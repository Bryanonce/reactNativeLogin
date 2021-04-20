import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { LoginStackNavigatorType } from '../types/NavigationTypes'
import LinearGradient from 'react-native-linear-gradient';
import { cardStyle } from '../themes/ComponentStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {globalScreen} from '../themes/GlobalStyles'
import {UserDB} from '../DB/UserDB'
import { useForm } from 'react-hook-form';
import { InputIcon } from '../components/InputIcon';

interface PropsStack extends StackScreenProps<LoginStackNavigatorType, 'Login'>{}
interface UserDataTransfer{user:string, password:string}

export const Login = ({navigation}:PropsStack) => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    });

    const onSubmit = (data:UserDataTransfer)=>{
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
                <InputIcon
                    styles={{
                        container: globalScreen.inputContainer,
                        input: cardStyle.loginInput,
                        icon: globalScreen.icons
                    }}
                    control={control}
                    name="user"
                    source={require('../resources/user-circle-solid.jpg')}
                />
                <InputIcon
                    styles={{
                        container: globalScreen.inputContainer,
                        input: cardStyle.loginInput,
                        icon: globalScreen.icons
                    }}
                    control={control}
                    name="password"
                    source={require('../resources/key-solid.jpg')}
                    password={true}
                />

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
