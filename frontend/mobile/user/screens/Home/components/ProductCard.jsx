import { View, Text, Image, Dimensions, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import CusColors from '../../../constants/Colors'

export default function ProductCard({ item }) {
    let width = Dimensions.get('screen').width / 2 - 8
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(CusColors.RIPPLECOLOR)}>
            <View key={item.id} className='p-2 flex-col justify-center  mx-1 my-1 rounded-lg' style={{ width: width }}>
                {/* image */}
                <Image resizeMode='cover'  className='h-[120px] w-full rounded-md' source={{ uri: (item.pic) }} />
                {/* text */}
                <View className='flex-row justify-between items-center mt-1'>
                    <View className='flex-col items-start justify-center flex-1'>
                        <Text className='font-montSemiBold text-xs text-ellipsis' numberOfLines={1}>{ item.name}</Text>
                    </View>
                    <View className='flex-col justify-center items-end flex-wrap'>
                        <Text className='font-montBold text-xs text-red-600' numberOfLines={1}>{ item.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>

    )
}