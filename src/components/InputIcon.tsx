import React from 'react'
import { Control, FieldValues } from 'react-hook-form'
import { Image, ImageSourcePropType, ImageStyle, StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import { BgInput } from './Input'

interface InputIconProps {
    styles: {
        container: StyleProp<ViewStyle>,
        input: StyleProp<TextStyle>,
        icon: StyleProp<ImageStyle>
    },
    name: string,
    control: Control<FieldValues>,
    source: ImageSourcePropType,
    password?: boolean
}

export const InputIcon = ({styles, name, control, source, password}:InputIconProps) => {
    return (
        <View style={styles.container}>
            <BgInput password={password} style={styles.input} name={name} control={control} />
            <Image style={styles.icon} source={source} />
        </View>
    )
}
