import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { CardTransaccion } from '../components/CardTransaccion'
import { StackNavigatorType } from '../types/NavigationTypes'

interface PropStack extends StackScreenProps<StackNavigatorType, 'Payment'>{}

export const Payment = ({route, navigation}:PropStack) => {
    
    useEffect(()=>{
        console.log(JSON.stringify(route.params))
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const getFecha = ():string=>{
        const fecha = new Date();
        const anio = String(fecha.getFullYear());
        let mes = String(fecha.getMonth());
        const dia = String(fecha.getDate());
        if((Number(mes)+1)<10){
            mes = `0${Number(mes)+1}`
        }
        return `${dia}/${mes}/${anio}`
    }

    return(
        <View
            style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingHorizontal: 25
            }}
        >
            <View style={{ marginVertical: 20}}>
                <Image 
                    style={{
                        width: 300,
                        height: 300
                    }}
                    source={require('../resources/visto.jpg')}
                />
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 30
                    }}
                    >Transferencia Existosa</Text>
            </View>

            <CardTransaccion 
                title="Valor: "
                value={route.params.cantidad}
            />

            <CardTransaccion
                title="Desde: "
                value={route.params.cuentOrigen}
                borders={false}
            />

            <CardTransaccion
                title="Para: "
                paramsLeft={[
                    'Numero de cuenta',
                    'Cedula',
                    'Nombre del Banco'
                ]}
                paramsRigth={[
                    route.params.cuentaBeneficiario,
                    '0985562532',
                    'Banco de Guayaquil'
                ]}
                value="José"
            />

            <CardTransaccion
                title="Fecha: "
                paramsLeft={[
                    'Descripcion',
                    'Notificacion',
                ]}
                paramsRigth={[
                    'Pago Servicios Básicos',
                    'helloworld@gmail.com'
                ]}
                value={getFecha()}
            />
            
        </View>
    )
}