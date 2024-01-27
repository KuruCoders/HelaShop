import { View, Text, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import CusColors from '../../constants/Colors'

export default function Input({ iconName, error, password, onFocus = () => { }, ...props }) {
    const [isFocused, setIsFocused] = useState(false)
    const [hidePassword, setHidePassword] = useState(password)
    return (
        <>
            <TextInput
                secureTextEntry={hidePassword}
                textColor='grey'
                right={error ? (
                    <TextInput.Icon color={'red'} icon='alert-circle' />
                ) : password ? (
                        <TextInput.Icon color={'grey'} icon='eye-outline' onPress={() => {
                            setHidePassword(!hidePassword)
                            !isFocused && Keyboard.dismiss

                        }} />
                ) : ''}
                left={<TextInput.Icon icon={iconName} />}
                theme={error ? (
                    { colors: CusColors.TEXTINPUTERROR }
                ) : isFocused ? (
                    { colors: CusColors.TEXTINPUTNORMAL }
                ) : ''}
                outlineColor={error ? (
                    'red'
                ) : isFocused ? (
                    'grey'
                ) : 'grey'}
                className="bg-white"
                mode="outlined"
                autoCorrect={false}
                onFocus={() => {
                    onFocus()
                    setIsFocused(true)
                }}
                onBlur={() => {
                    setIsFocused(false)
                }}
                {...props} />
            {error && (
                <Text className="text-red-500 ">{error}</Text>
            )}
        </>
    )
}