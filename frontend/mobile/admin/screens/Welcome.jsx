import { View, Text } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View className="w-full h-full flex justify-center items-center">
      <Text className="font-montBold text-3xl">Welcome</Text>
      <Text className="font-mont pt-5 text-3xl">Welcome</Text>
      <Text className="font-montBlack pt-5 text-3xl">Welcome</Text>
      <Text className="font-montItalic pt-5 text-3xl">Welcome</Text>
      <Text className="font-montBoldItalic pt-5 text-3xl">Welcome</Text>
      <Text className="font-montExtraBoldItalic pt-5 text-3xl">Welcome</Text>
      <Text className="font-mont pt-5 text-3xl ">Welcome</Text>
    </View>
  )
}