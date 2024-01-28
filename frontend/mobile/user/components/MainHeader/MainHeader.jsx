import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { Appbar, Avatar } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

export default function MainHeader() {
    return (
        <>
            <Appbar.Header className="flex-row justify-between items-center px-[12px] bg-white shadow-sm">
                <Image className="w-[155px] h-[30px] ml-1" source={require('../../assets/logos/logoAll.jpg')} />
                <View className="flex-row items-center">
                    <Image className="rounded-lg w-[30px] h-[30px] mx-4" source={require('../../assets/lk.jpg')} />
                    <TouchableOpacity activeOpacity={0.9}>
                        <Avatar.Image size={35} source={require('../../assets/logos/user-1.jpg')} />
                    </TouchableOpacity>
                </View>
            </Appbar.Header>
            {/* row 2 view */}
            <View className="flex-row justify-between items-center bg-white px-[12px] pb-3">
                {/* search view */}
                <View className="flex-1">
                    <TouchableOpacity className="rounded-full bg-back flex-row items-center p-2" activeOpacity={0.9}>
                        {/* search icon*/}
                        <Ionicons name="search" color={'grey'} size={20} />
                        {/* input field */}
                        <TextInput onChangeText={(text) => {
                            console.log('search' + text)
                        }} className="w-full text-base font-montSemiBold ml-3 text-gray-500" placeholder={`Search products`} placeholderTextColor={'grey'} />
                    </TouchableOpacity>
                </View>
                {/* download pdf */}
                <View className='ml-3'>
                    <TouchableOpacity onPress={() => { console.log('qr') }} className="rounded-full bg-yellow-400 flex-row items-center p-2" activeOpacity={0.9}>
                        {/* search icon*/}
                        <Ionicons name="filter-sharp" color={'white'} size={20} />
                        {/* download btn */}
                        <Text className="font-montSemiBold text-white mx-2 uppercase">Filter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
        // <Appbar.Header>
        //     <Appbar.BackAction />
        //     <Appbar.Content title="Title" />
        //     <Appbar.Action icon="magnify" />
        //     <Appbar.Action icon="dots-vertical" />
        // </Appbar.Header>
    )
}