import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import CusColors from '../../constants/Colors'

export default function In({ iconName, errors, password, onFocus = () => { }, ...props }) {
    const [isFocused, setIsFocused] = useState(false)
    const [hidePassword, setHidePassword] = useState(password)
    return (

        <TextInput
            textColor='grey'
            right={errors && <TextInput.Icon color={'red'} icon='alert-circle' />}
            left={iconName && <TextInput.Icon color={CusColors.BGICONSINPUT} icon={iconName} size={20} />}
            theme={errors ? (
                { colors: CusColors.TEXTINPUTERROR }
            ) : isFocused ? (
                { colors: CusColors.TEXTINPUTNORMAL }
            ) : {}}
            outlineColor={errors ? (
                'red'
            ) : isFocused ? (
                'grey'
            ) : 'grey'}
            style={{ backgroundColor: CusColors.BGBACK, flexGrow: 1 }}
            mode="flat"
            autoCorrect={false}
            onFocus={() => {
                onFocus();
                setIsFocused(true);
            }}
            onBlur={() => {
                setIsFocused(false);
            }}
            {...props}
        />

    )
}