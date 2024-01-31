import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function ReviewCard() {
    return (
        <>
            <View className='flex-col justify-center'>
                {/* row1 */}
                <View className='flex-row justify-between items-center mt-1'>
                    <Text className="font-montSemiBold text-lg opacity-60">Product Reviews</Text>
                    <Text className="font-montSemiBold text-base opacity-60">see more</Text>
                </View>
                {/* row2 */}
                <View className='p-3 px-2 border border-slate-200 rounded-lg mt-2'>
                    {/* subrow01 */}
                    <View className='flex-row justify-between items-center'>
                        <View className='flex-row justify-between items-center'>
                            <Image className=' rounded-full w-[40px] h-[40px]' source={require('.../../../../assets/logos/user-1.jpg')} />
                            <View className='flex-col justify-center ml-3'>
                                <Text className='font-montMedium opacity-60'>example@gmail.com</Text>
                                <Text className='font-montMedium opacity-60 text-xs mt-2'>19th Jan 2024</Text>
                            </View>
                        </View>
                        <View className='my-3 flex-row items-center'>
                            <Text className='font-montBold text-xs text-green-700 opacity-50' numberOfLines={1}>
                                <Ionicons name="star-sharp" color={'blue'} size={18} />
                                <Ionicons name="star-sharp" color={'blue'} size={18} />
                                <Ionicons name="star-sharp" color={'blue'} size={18} />
                                <Ionicons name="star-sharp" color={'blue'} size={18} />
                                <Ionicons name="star-outline" color={'blue'} size={18} />
                            </Text>
                        </View>
                    </View>
                    {/* subrow3 */}
                    <View className='mt-3 w-full'>
                        <Text numberOfLines={2} className='text-justify font-montMedium opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rerum consequatur magni veniam quas inventore quis earum doloribus adipisci cum corporis repellendus, voluptates placeat maxime ex saepe quo qui aperiam?</Text>
                    </View>
                </View>
            </View>
        </>
    )
}