import { View, Text, Image, Dimensions, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import CusColors from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function ProductCard({ item }) {
    const navigation = useNavigation() 
    let width = Dimensions.get('screen').width / 2 - 8
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(CusColors.RIPPLECOLOR)} onPress={() => {
            navigation.navigate('homeStack',{screen:'product'})
        }}>
            <View key={item.id} className='p-1 flex-col justify-center mx-1 my-1 rounded-lg border border-slate-50' style={{ width: width }}>
                {/* image */}
                <Image resizeMode='cover' className='h-[130px] w-full rounded-md' source={{ uri: (item.pic) }} />
                {/* text */}
                <View className='flex-row justify-between items-center mt-1'>
                    <View className='flex-col items-start justify-center flex-1'>
                        <Text className='font-mont text-xs text-ellipsis opacity-50' numberOfLines={1}>Ratings</Text>
                        <Text className='font-montSemiBold text-xs text-ellipsis' numberOfLines={1}>{item.name}</Text>
                    </View>
                    <View className='flex-col justify-center items-end flex-wrap'>
                        <Text className='font-montBold text-xs text-green-700 opacity-50' numberOfLines={1}>
                            <Ionicons name="star-sharp" color={'blue'} size={12} />
                            <Ionicons name="star-sharp" color={'blue'} size={12} />
                            <Ionicons name="star-sharp" color={'blue'} size={12} />
                            <Ionicons name="star-sharp" color={'blue'} size={12} />
                            <Ionicons name="star-outline" color={'blue'} size={12} />
                        </Text>
                        <Text className='font-montBold text-xs text-red-600' numberOfLines={1}>{item.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}