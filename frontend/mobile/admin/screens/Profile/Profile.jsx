import { View, Text, Image } from 'react-native'
import React from 'react'
import { Appbar, Avatar } from 'react-native-paper'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ProfileHeader from './components/ProfileHeader'
import { Ionicons } from '@expo/vector-icons'

export default function Profile() {
  return (
    <>
      <ProfileHeader />
      <ScrollView className="bg-white">
        {/* row 1*/}
        <View className="bg-white flex-row justify-between items-center p-2  space-x-3 px-5">
          {/* box 01 */}
          <View className="bg-back p-3 flex-1 rounded-lg flex-col justify-center items-center">
            {/* image */}
            <Image className="h-[60px] w-[60px]" source={require('../../assets/images/billing.png')} />
            {/* text */}
            <Text className="font-montSemiBold">Billing</Text>
          </View>
          {/* box 02 */}
          <View className="bg-back p-3 flex-1 rounded-lg flex-col justify-center items-center">
            {/* image */}
            <Image className="h-[60px] w-[60px]" source={require('../../assets/images/secure.png')} />
            {/* text */}
            <Text className="font-montSemiBold">Security</Text>
          </View>
          {/* box 03 */}
          <View className="bg-back p-3 flex-1 rounded-lg flex-col justify-center items-center">
            {/* image */}
            <Image className="h-[60px] w-[60px]" source={require('../../assets/images/profile.png')} />
            {/* text */}
            <Text className="font-montSemiBold">Profile</Text>
          </View>

        </View>

        {/* row 2 */}
        <View className="bg-white px-5 pb-4 pt-3">
          <View className="bg-back p-4 py-3 rounded-lg flex-row justify-between items-center">
            {/* clumn01 */}
            <View className="flex-col items-start flex-1 mr-8">
              <Text className="font-montSemiBold text-3xl">Mosh</Text>
              <Text className="font-semibold opacity-50 mt-2 mb-1">Account is stable and active no issues encountered</Text>
              <View className="bg-green-200 p-1 rounded-md w-full">
                <Text className="text-center text-green-700 font-semibold text-lg" >Active</Text>
              </View>
            </View>
            {/* clumn02 */}
            <View className="flex-col justify-center items-center">
              <Image className="rounded-full w-[90px] h-[90px]" source={require('../../assets/logos/user-1.jpg')} />
            </View>
          </View>
        </View>

        {/* the bg back view */}
        <View className="bg-back h-2"></View>

        {/* row 03 */}
        <View className="mt-2 bg-white p-2 px-[16px]">

          <View className="flex-row items-center mt-3 mb-6">
            {/* icon */}
            <Ionicons size={25} name='call-outline' />
            {/* text */}
            <Text className="font-montSemiBold  text-base ml-5">Contact Us</Text>
          </View>

          {/* row 2.8 */}
          <View className="flex-row items-center mb-6">
            {/* icon */}
            <Ionicons size={25} name='finger-print-outline' />
            {/* text */}
            <Text className="font-montSemiBold  text-base ml-5">Privacy</Text>
          </View>

          {/* row 2.9 */}
          <View className="flex-row items-center mb-6">
            {/* icon */}
            <Ionicons size={25} name='reader-outline' />
            {/* text */}
            <Text className="font-montSemiBold text-base ml-5">About Company</Text>
          </View>


          {/* row 3.1 */}
          <View className="flex-row items-center mb-6">
            {/* icon */}
            <Ionicons size={25} name='share-social-outline' />
            {/* text */}
            <Text className="font-montSemiBold text-base ml-5">Share Now</Text>

          </View>
          {/* row 3.2 */}
          <View className="flex-row items-center mb-6">
            {/* icon */}
            <Ionicons size={25} name='log-out-outline' />
            {/* text */}
            <Text className="font-montSemiBold text-base ml-5">Logout Now</Text>

          </View>

          {/* row 3.0 */}
          <View className="flex-row items-center">
            {/* icon */}
            <Ionicons size={25} name='trash-bin-outline' color={'red'} />
            {/* text */}
            <Text className="font-montSemiBold text-red-500 text-base ml-5">Delete Account</Text>
          </View>

          {/* the version with logo */}
          <View className="flex-col justify-center items-start p-2 mt-3">
            <Image className="w-[180px] h-[30px]" source={require('../../assets/logos/logoAll.jpg')} />
            <Text className="opacity-50 font-montSemiBold capitalize text-xs">all rights reserved</Text>
            <Text className="opacity-50 font-montSemiBold text-xs">v1.0.0</Text>
          </View>
        </View>
      </ScrollView>
    </>
  )
}