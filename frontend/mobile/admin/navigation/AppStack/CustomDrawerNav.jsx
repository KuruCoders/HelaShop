import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

export default function CustomDrawerNav({ prop }) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...prop}
                contentContainerStyle={{ backgroundColor: '#017aff' }}>
                <View
                    // source={require('../../assets/logos/logoAll.jpg')}
                    style={{ padding: 20 }}>
                    <Image className="h-32 w-32 rounded-full mb-5 -ml-1"
                        source={require('../../assets/logos/user-1.jpg')}/>
                    <Text className="text-white mb-2 font-montSemiBold text-xl">John Doe</Text>
                    <View className="flex-row justify-start items-center">
                        <Ionicons name="people" size={14} color="#fff" />
                        <Text className="text-white ml-2 font-montSemiBold">Administrator</Text>
                    </View>
                </View>
                <View className="flex-1 bg-white pt-5">
                    <DrawerItemList {...prop} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, paddingVertical:10, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} className='py-3'>
                    <View className="flex-row items-center">
                        <Ionicons name="share-social-outline" size={20} />
                        <Text className="ml-5 text-sm font-montSemiBold opacity-60">
                            Tell a Friend
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} className='py-3'>
                    <View className="flex-row items-center">
                        <Ionicons name="exit-outline" size={20} />
                        <Text className="ml-5 text-sm font-montSemiBold opacity-60">
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}