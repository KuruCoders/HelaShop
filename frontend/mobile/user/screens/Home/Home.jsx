import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MainHeader from '../../components/MainHeader/MainHeader'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ImageParallax from './components/ImageParallax'
import HomeCategory from './components/HomeCategory'
export default function Home() {
  const navogation = useNavigation()
  return (
    <>
      <MainHeader />
      <ScrollView className='bg-white'>
        {/* categories section */}
        <View className="mt-2">
          {/* <View className='flex-row justify-between items-center px-4 mb-2'>
            <Text className="font-montSemiBold text-base">Explore What You Like</Text>
            <Text className="font-montSemiBold text-base">🛒</Text>
          </View> */}
          <HomeCategory />
        </View>
        {/* iamge paralla */}
        <ImageParallax />
        {/* flatlist */}
      </ScrollView>
    </>
  )
}