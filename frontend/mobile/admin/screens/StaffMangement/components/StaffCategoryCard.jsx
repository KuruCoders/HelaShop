import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import CusColors from '../../../constants/Colors'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

export default function StaffCategoryCard() {
    const staffCats = [
        { url: require("../../../assets/images/trainee.jpg"), type: 'trainee' },
        { url: require("../../../assets/images/admin.jpg"), type: 'admin' },
        { url: require("../../../assets/images/employee.jpg"), type: 'employee' },
        { url: require("../../../assets/images/security.jpg"), type: 'security' },
        { url: require("../../../assets/images/worker.jpg"), type: 'worker' },
        { url: require("../../../assets/images/cleaner.jpg"), type: 'cleaner' },
    ]
    return (
        <FlatList
            data={staffCats}
            renderItem={({ item }) => (
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(CusColors.RIPPLECOLOR)}>
                    <View className="rounded-md p-3 flex-col justify-center items-center">
                        <Image
                            className="mb-2 w-[60px] h-[60px] rounded-full"
                            source={(item.url)}
                        />
                        <Text className="font-montSemiBold text-xs capitalize">{item.type}</Text>
                    </View>
                </TouchableNativeFeedback>
            )}
            horizontal={true} showsHorizontalScrollIndicator={false} className="px-[12px] bg-white" />
    )
}