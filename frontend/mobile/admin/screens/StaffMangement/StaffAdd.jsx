import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

export default function StaffAdd() {
    return (
        <ScrollView className="px-[16px] bg-back mt-2">
            {/* image card */}
            <View className="bg-white rounded-lg p-4 flex-col justify-center">
                {/* text row */}
                <View className="flex-row justify-between items-center">
                    <Text className="font-montBold text-lg opacity-60">Upload Picture</Text>
                    <Ionicons name={'images'} color={'grey'} size={25} />
                </View>
                {/* imageuplad preview */}
                <View className="flex-col justify-center items-center my-8">
                    <View className="border border-slate-300 p-2 rounded-full">
                        <Image className="rounded-full w-[150px] h-[150px]" source={require('../../assets/logos/user-1.jpg')} />
                    </View>
                    <Text className="font-montMedium opacity-50 mx-16 text-center mt-5">Allowed *.jpeg, *.jpg, *.png,  max size of 3 Mb</Text>
                </View>
                {/* btns */}
                <View className="flex-row justify-around items-center my-2">
                    <TouchableOpacity activeOpacity={0.9} className="p-3 rounded-lg bg-yellow-200 flex-1 mr-3">
                        <Text className="font-montSemiBold text-center text-yellow-700">Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} className="p-3 rounded-lg bg-green-200 flex-1">
                        <Text className="font-montSemiBold text-center text-green-700">New Picture</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* staff form */}
        </ScrollView>
    )
}