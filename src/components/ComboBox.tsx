import React from 'react'
import RNPickerSelect from 'react-native-picker-select';

import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import { uiKiten } from '../themes/ComponentStyles';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { StyleProp, TextStyle } from 'react-native';


interface PropsSelect {
    name: string,
    control: Control<FieldValues>,
    style?: StyleProp<TextStyle>,
    comboData: Array<{ label: string, value: string }>
}

export const ComboBox = ({name, control, style, comboData}:PropsSelect) => {

    return (
        <>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    /*<Layout style={style? style :uiKiten.container} level='1'>
                        <Select
                            size="large"
                            selectedIndex={value}
                            onSelect={index => onChange(index)}
                            onBlur={onBlur}
                        >
                            {
                                comboData.map((option, index)=>{
                                    return (
                                        <SelectItem 
                                            title={option} 
                                            descriptor={{multiSelect: false, index: (new IndexPath(index))}} 
                                            key={index} 
                                        />)
                                })
                            }
                        </Select>
                    </Layout>*/
                    <RNPickerSelect
                        onValueChange={(value) => onChange(value)}
                        value={value}
                        items={comboData}
                    />
                )}
                name={name}
                rules={{ required: true }}
                defaultValue=""
            />
        </>
        
    )
}
