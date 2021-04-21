import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect, useState } from 'react'
import { View, Text, useWindowDimensions, Switch } from 'react-native'
import { DrawerNavigatorType } from '../types/NavigationTypes'
import { InputIcon } from '../components/InputIcon'
import { useForm } from 'react-hook-form'
import { cardStyle, switchStyles } from '../themes/ComponentStyles'
import { globalScreen } from '../themes/GlobalStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ComboBox } from '../components/ComboBox'
import { BgInput } from '../components/Input'
import * as Progress from 'react-native-progress';
import { StackScreenProps } from '@react-navigation/stack'
import {StackNavigatorType} from '../types/NavigationTypes'
import { LoadingChash } from '../components/LoadingChash'

interface PropsStack extends StackScreenProps<StackNavigatorType, 'DashBoard'>{}
interface DataCuentas {cuentOrigen: string, cuentaBeneficiario: string, cantidad: number}

export const DashBoard = ({navigation}:PropsStack) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const { control, handleSubmit } = useForm();

    /**Modularizar ---------------*/
    const [loading, setLoading] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(false);

    const load = async (data:DataCuentas)=>{
        setIsLoading(true);
        const timer = (ms:number) => new Promise(res => setTimeout(res, ms))
        for(let i=1; i<=10; i++){
            setLoading((i*10)/100)
            await timer(100)
        }
        setIsLoading(false)
        navigation.navigate('Payment', data);
    }
    /**Modularizar ---------------*/

    useEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const onSubmit = (data:DataCuentas)=>{
        //navigation.navigate('Menu');
        load(data);
        
    };

    return (
        <>
            <View
                style={[{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }, isLoading ? { opacity: 0.2 } : null]}
            >
                <View style={{ width: 300 }}>

                    <View
                        style={{
                            marginVertical: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                            }}
                        >Cuenta de Origen</Text>

                        

                        <ComboBox
                            name="cuentOrigen"
                            control={control}
                            comboData={[
                                { label: '123456789', value: '123456789' },
                                { label: '585569557', value: '585569557' },
                                { label: '554478544', value: '554478544' },
                            ]}
                        />

                        <View style={[switchStyles.container, {marginVertical: 10}]}>
                            <Text
                                style={{
                                    fontSize: 18,
                                }}
                            >Cuentas Registradas</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                            }}
                        >Seleccione Beneficiario</Text>
                        {
                            !isEnabled?
                                <BgInput
                                    control={control}
                                    name="cuentaBeneficiario"
                                    style={[cardStyle.loginInput, { position: 'relative', paddingVertical: 5, paddingLeft: 20}]}
                                />
                            :
                                <ComboBox
                                    name="cuentaBeneficiario"
                                    control={control}
                                    comboData={[
                                        { label: 'daw4dd4wa4da4d', value: 'daw4dd4wa4da4d' },
                                        { label: '44484548844554', value: '44484548844554' },
                                        { label: 'adwa5d15ad8d11', value: 'adwa5d15ad8d11' },
                                    ]}
                                />
                        }
                    </View>

                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                            }}
                        >Cantidad</Text>
                        <BgInput
                            control={control}
                            name="cantidad"
                            type="decimal-pad"
                            style={[cardStyle.loginInput, { position: 'relative', paddingVertical: 5, paddingLeft: 20 }]}
                        />
                    </View>

                    <TouchableOpacity
                        style={[cardStyle.buttonLogin, { marginTop: 40 }]}
                        onPress={handleSubmit(onSubmit)}
                    >
                        <Text style={cardStyle.textButtonLogin}>Ingresar</Text>
                    </TouchableOpacity>
                </View>



            </View>

            <View
                style={!isLoading? {display: 'none'}: 
                {
                    display: 'flex',
                    position: 'absolute',
                    alignSelf: 'center',
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center'
                }}
            >
                <Progress.Circle 
                    style={{
                        alignSelf: 'center'
                    }}
                    size={150} 
                    progress={loading} 
                    showsText={true}
                    />
            </View>

        </>
    )
}

