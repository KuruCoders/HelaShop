import { View, Text, Image, Alert, TextInput } from 'react-native'
import React from 'react'
import { Appbar, Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default function AppHeader({ navigation, title }) {
    const openDrawer = () => {
        navigation.openDrawer();
    };
    return (
        <>
            <Appbar.Header className="flex-row justify-between items-center px-[16px] bg-white shadow-sm">
                <Text className="font-montBold text-3xl capitalize">{title}</Text>
                <TouchableOpacity onPress={openDrawer}>
                    <Avatar.Image size={35} source={require('../../assets/logos/user-1.jpg')} />
                </TouchableOpacity>
            </Appbar.Header>
            {/* search view */}
            <View className="w-full bg-white px-[16px] pb-3">
                <TouchableOpacity className="rounded-full bg-back flex-row items-center p-2" activeOpacity={0.9}>
                    {/* search icon*/}
                    <Ionicons name="search" color={'grey'} size={20} />
                    {/* input field */}
                    <TextInput className="w-full text-base font-montSemiBold ml-3 text-gray-500" placeholder={ `Search ${title} here ....`} placeholderTextColor={'grey'}/>
                </TouchableOpacity>
            </View>
        </>
    )
}