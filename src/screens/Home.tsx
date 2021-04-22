import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { cardStyle } from '../themes/ComponentStyles'
import { StackNavigatorType } from '../types/NavigationTypes'

interface PropStack extends StackScreenProps<StackNavigatorType, 'Home'>{}

export const Home = ({navigation}:PropStack) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <View
                style={{
                    flex: 0.4,
                    backgroundColor: '#DA0073',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 2,
                    borderBottomColor: '#fff'
                }}
            >
                <Image
                    style={{
                        width: 200,
                        height: 200
                    }}
                    source={require('../resources/BGlogo.jpg')} />
            </View>

            
            <LinearGradient
                colors={['#DA0073', '#fff']}
                style={[cardStyle.linearGradient, { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }]}
            >
                <View
                    style={{
                        flex: 1,
                        width: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'center',

                    }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            marginVertical: 40,
                            color: '#fff'
                        }}
                    >Bienvenido</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 170,
                                height: 170,
                                backgroundColor: '#fff',
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                shadowRadius: 10
                            }}

                            onPress={()=>navigation.navigate('DashBoard')}
                        >
                            <Text
                                style={{
                                    fontSize: 20
                                }}
                            >Transferencias</Text>
                        </TouchableOpacity>



                        <TouchableOpacity
                            style={{
                                width: 170,
                                height: 170,
                                backgroundColor: '#fff',
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20
                                }}
                            >Usuario</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}
