import React from 'react'
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';

import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import { uiKiten } from '../themes/ComponentStyles';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { Image, StyleProp, TextStyle, View } from 'react-native';


interface PropsSelect {
    name: string,
    control: Control<FieldValues>,
    style?: PickerStyle,
    comboData: Array<{ label: string, value: string }>
}

export const ComboBox = ({name, control, style, comboData}:PropsSelect) => {

    return (
        <>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View
                        style={{
                            justifyContent: 'center',

                        }}
                    >
                        <RNPickerSelect
                            onValueChange={(value) => onChange(value)}
                            useNativeAndroidPickerStyle={false}
                            style={ style? style : {inputAndroid: {color: 'black', backgroundColor: '#ccc', paddingHorizontal: 10, marginVertical: 15, borderRadius: 10} }}
                            value={value}
                            items={comboData}

                        />
                        <View
                            style={{
                                position: 'absolute',
                                right: 0,
                                backgroundColor: '#fff',
                                minWidth: 50,
                                minHeight: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#ccc'
                            }}
                        >
                            <Image style={{
                                width: 15,
                                height: 15,
                            }} source={require('../resources/down.jpg')} />
                        </View>
                        
                    </View>
                )}
                name={name}
                rules={{ required: true }}
                defaultValue=""
            />
        </>
        
    )
}
