import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import CusColors from '../../../constants/Colors'
import { FlatList } from 'react-native-gesture-handler'

export default function HomeCategory() {
    const staffCats = [
        { url: require("../../../assets/images/gaming.jpg"), type: 'gaming' },
        { url: require("../../../assets/images/mobile.jpg"), type: 'mobile' },
        { url: require("../../../assets/images/toys.jpg"), type: 'toys' },
        { url: require("../../../assets/images/kitchen.jpg"), type: 'utensils' },
        { url: require("../../../assets/images/books.jpg"), type: 'books' },
        { url: require("../../../assets/images/sport.jpg"), type: 'sports' },
    ]
    return (
        <FlatList
            data={staffCats}
            renderItem={({ item }) => (
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(CusColors.RIPPLECOLOR)}>
                    <View className="rounded-md p-3 flex-col justify-center items-center">
                        <Image
                            className="mb-2 w-[60px] h-[60px] rounded-lg"
                            source={(item.url)}
                        />
                        <Text className="font-montSemiBold text-xs capitalize">{item.type}</Text>
                    </View>
                </TouchableNativeFeedback>
            )}
            horizontal={true} showsHorizontalScrollIndicator={false} className="px-[12px] bg-white" />
    )
}