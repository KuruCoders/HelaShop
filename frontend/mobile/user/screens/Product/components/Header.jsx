import { View, Text, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import CusColors from '../../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation()
    return (
        <View className=' flex-row justify-between items-center  px-[12px] mt-3 mb-5'>
            <View className='flex-row justify-between items-center space-x-4'>
                <View style={{ borderRadius: 15, overflow: 'hidden' }}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('grey')} onPress={() => {
                        navigation.goBack()
                    }}>
                        <View className='bg-back rounded-full p-2'>
                            <Ionicons name="arrow-back" color={'black'} size={20} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View className='overflow-hidden'>
                    <Text className='font-montBold text-xl'>Nike Jord</Text>
                </View>
            </View>
            {/*  btns */}
            <View className='flex-row justify-between items-center space-x-4'>
                <View style={{ borderRadius: 15, overflow: 'hidden' }}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('grey')}>
                        <View className='bg-back rounded-full p-2'>
                            <Ionicons name="cart" color={'black'} size={20} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{ borderRadius: 15, overflow: 'hidden' }}>
                    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('red')}>
                        <View className='bg-back rounded-full p-2'>
                            <Ionicons name="heart" color={'red'} size={20} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}