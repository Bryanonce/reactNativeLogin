import React from 'react'
import { Control, Controller, DeepMap, FieldError, FieldValues } from 'react-hook-form';
import { KeyboardType, KeyboardTypeOptions, StyleProp, TextStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface PropsInput {
    name: string,
    control: Control<FieldValues>,
    password?: boolean,
    style: StyleProp<TextStyle>,
    type?: KeyboardTypeOptions
}

export const BgInput = (
    {name, control, password=false, style, type}:PropsInput)=>{
        
    return (
        <>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    !password ?
                        <TextInput
                            keyboardType={type? type: 'default' }
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            style={style} />
                        :
                        <TextInput
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                            style={style}
                            secureTextEntry={true} />

                )}
                name={name}
                rules={{ required: true }}
                defaultValue=""
            />
        </>
        
    );
}