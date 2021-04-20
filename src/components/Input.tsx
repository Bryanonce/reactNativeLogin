import React from 'react'
import { Control, Controller, DeepMap, FieldError, FieldValues } from 'react-hook-form';
import { StyleProp, TextStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { cardStyle } from '../themes/ComponentStyles';

interface PropsInput {
    name: string,
    control: Control<FieldValues>,
    password?: boolean,
    style: StyleProp<TextStyle>
}

export const Input = (
    {name, control, password=false, style}:PropsInput)=>{
        
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