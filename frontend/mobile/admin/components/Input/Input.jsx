import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import CusColors from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Input({ iconName, error, password, onFocus = () => { }, ...props }) {
    const [isFocused, setIsFocused] = useState(false)
    const [hidePassword, setHidePassword] = useState(password)
    return (
        <>
            {password ? (
                <View>
                    <TextInput
                        secureTextEntry={hidePassword}
                        textColor='grey'
                        right={error ? (
                            <TextInput.Icon color={'white'} icon='alert-circle' />
                        ) : ''}
                        left={<TextInput.Icon color={CusColors.BGICONSINPUT} icon='key' />}
                        theme={error ? (
                            { colors: CusColors.TEXTINPUTERROR }
                        ) : isFocused ? (
                            { colors: CusColors.TEXTINPUTNORMAL }
                        ) : {}}
                        outlineColor={error ? (
                            'red'
                        ) : isFocused ? (
                            'grey'
                        ) : 'grey'}
                        style={{ backgroundColor: 'white' }}
                        mode="outlined"
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
                    <View className="absolute right-4">
                        <TouchableOpacity activeOpacity={0.7} onPress={() => {
                            setHidePassword(!hidePassword);
                        }}>
                            <Ionicons name={hidePassword ? 'eye' : 'eye-off-outline'} color={CusColors.BGICONSINPUT} size={26} />
                        </TouchableOpacity>
                    </View>
                    {error && (
                        <>
                            <Text style={{ color: 'red', flex: 1, maxWidth: 200 }}>{error}</Text>
                        </>
                    )}
                </View>
            ) : (
                <View>
                    <TextInput
                        secureTextEntry={hidePassword}
                        textColor='grey'
                        right={error ? (
                            <TextInput.Icon color={'red'} icon='alert-circle' />
                        ) : ''}
                        left={iconName ? (<TextInput.Icon color={CusColors.BGICONSINPUT} icon={iconName} />) : ''}
                        theme={error ? (
                            { colors: CusColors.TEXTINPUTERROR }
                        ) : isFocused ? (
                            { colors: CusColors.TEXTINPUTNORMAL }
                        ) : {}}
                        outlineColor={error ? (
                            'red'
                        ) : isFocused ? (
                            'grey'
                        ) : 'grey'}
                        style={{ backgroundColor: 'white', maxWidth: '100%' }}
                        mode="outlined"
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
                    {error && (
                        <>
                            {/* <Text style={{ color: 'red' }}>{error}</Text> */}
                        </>
                    )}
                </View>
            )}
        </>
    );
}