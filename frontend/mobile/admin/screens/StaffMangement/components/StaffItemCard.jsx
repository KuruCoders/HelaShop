import { View, Text, TouchableNativeFeedback,Image } from 'react-native'
import React from 'react'
import CusColors from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
export default function StaffItemCard({item}) {
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(CusColors.RIPPLECOLOR)}>
            <View key={item.id} className="p-[12px] py-4 bg-white flex-row justify-between items-center">
                {/* left */}
                <View className="flex-row flex-1">
                    {/* image */}
                    <Image
                        className="w-[60px] h-[60px] rounded-full"
                        source={{ uri: (item.pic) }} />
                    {/* text */}
                    <View className="flex-col justify-center items-start ml-4">
                        <Text className="font-montSemiBold text-base capitalize">{item.name}</Text>
                        <Text className="opacity-50 font-mont ">{item.email}</Text>
                        <Text className="font-montSemiBold text-green-500">Joined : 20th Jan 2024</Text>
                    </View>
                </View>
                {/* right */}
                <View>
                    <Ionicons name="chevron-forward-outline" size={30} color={'grey'} />
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}