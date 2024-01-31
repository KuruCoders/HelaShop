import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ProductFooter() {
    return (
        <View className='bg-white w-full p-3 px-4 flex-row justify-between items-center relative bottom-0'>

            <View className='flex-1 mr-4'>
                <TouchableOpacity className=' p-2 rounded-md border-2 border-indigo-600' activeOpacity={0.8}>
                    <Text className='font-montSemiBold text-center text-xl text-indigo-600'>Back</Text>
                </TouchableOpacity>
            </View>

            <View className='flex-1'>
                <TouchableOpacity className='bg-indigo-600 p-2 rounded-md ' activeOpacity={0.8}>
                    <Text className='font-montSemiBold text-center text-xl text-white'>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}