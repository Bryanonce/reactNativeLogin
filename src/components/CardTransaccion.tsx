import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface PropsCardTransaccion {
    title: string,
    value: string | number,
    paramsLeft?: string[],
    paramsRigth?: string[],
    borders?: boolean
}

export const CardTransaccion = (
    {
        title,
        value,
        paramsLeft = [],
        paramsRigth = [],
        borders = true
    }: PropsCardTransaccion) => {

    return (
        <View
            style={[{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
            }, borders ? { borderBottomWidth: 0.5, borderBottomColor: '#000' } : null]}
        >
            <View
                style={{
                    paddingVertical: 15
                }}
            >
                <Text
                    style={transactionStyles.titles}
                >{title}</Text>
                {
                    paramsLeft.map((text, index) => {
                        return <Text 
                        style={transactionStyles.params}
                        key={index}>{text}</Text>
                    })
                }

            </View>
            <View
                style={{
                    paddingVertical: 15,
                }}
            >
                <Text
                    style={[transactionStyles.titles, transactionStyles.textRigth]}
                >{value}</Text>
                {
                    paramsRigth.map((text, index) => {
                        return <Text 
                        style={[transactionStyles.params, transactionStyles.textRigth]}
                        key={index}>{text}</Text>
                    })
                }
            </View>
        </View>
    )
}

const transactionStyles = StyleSheet.create({
    titles: {
        fontSize: 18,
    },
    params: {
        fontSize: 13,
        color: '#616161',
    },
    textRigth: {
        textAlign: 'right',
    }
})
