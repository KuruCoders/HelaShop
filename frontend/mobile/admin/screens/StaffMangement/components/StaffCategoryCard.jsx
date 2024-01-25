import { TouchableOpacity, Text,Image } from 'react-native'
import React from 'react'

export default function StaffCategoryCard() {
    return (
        <TouchableOpacity className="rounded-md p-3 flex-col justify-center items-center" activeOpacity={0.8}>
            <Image
                className="mb-2 w-[60px] h-[60px] rounded-full"
                source={require("../../../assets/images/product.jpg")}
            />
            <Text className="font-montSemiBold text-xs">Trainee</Text>
        </TouchableOpacity>
    )
}