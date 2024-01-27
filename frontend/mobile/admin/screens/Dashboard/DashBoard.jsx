import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'
import DashBoardHeader from "../../components/Header/DashBoardHeader";
import { useNavigation } from "@react-navigation/native";
export default function DashBoard() {
  const navigation = useNavigation()
  return (
    <>
      <DashBoardHeader navigation={navigation} handleSearch={''} />
      <ScrollView className="px-[12px] pt-2 bg-back">
        {/* row 0 */}
        <View className="rounded-lg bg-white flex-row justify-between p-4">
          {/* left */}
          <View className="flex-col justify-center flex-shrink mr-8">
            <Text className="text-4xl text-blue-500 font-montBold">450</Text>
            <Text className="text-sm text-blue-600 font-mont text-justify">Above is the total active users present</Text>
            <View className="bg-blue-200 rounded-md p-2 mt-1">
              <Text className="font-montBold text-blue-800 text-center">Active Users</Text>
            </View>
          </View>
          {/* right */}
          <View className="bg-back w-[140px] h-[140px] p-2 rounded-full">
            <Image
              className="mb-2 w-full h-full rounded-full"
              source={require("../../assets/images/banner01.jpg")}
            />
          </View>
        </View>
        {/* row 1 */}
        <View className="flex-row justify-around items-center space-x-2 mt-2">
          <View className="bg-green-100 bg-white py-3 rounded-xl flex-grow flex-col justify-center items-center">
            <Image
              className="mb-2"
              source={require("../../assets/images/card04.png")}
            />
            <Text className="font-montBold text-2xl text-green-600">$300</Text>
            <Text className="font-montSemiBold text-base text-green-400">
              Total Sales
            </Text>
          </View>
          <View className="bg-blue-100 bg-white py-3 rounded-xl flex-grow flex-col justify-center items-center" >
            <Image
              className="mb-2"
              source={require("../../assets/images/card03.png")}
            />
            <Text className="font-montBold text-2xl text-blue-600">450</Text>
            <Text className="font-montSemiBold text-base text-blue-400">
              Total Users
            </Text>
          </View>
        </View>
        {/* row 2 */}
        <View className="flex-row justify-around items-center space-x-2 mt-2">
          <View className="bg-yellow-100 bg-white py-3 rounded-xl flex-grow flex-col justify-center items-center">
            <Image
              className="mb-2"
              source={require("../../assets/images/card02.png")}
            />
            <Text className="font-montBold text-2xl text-yellow-600">100</Text>
            <Text className="font-montSemiBold text-base text-yellow-400">
              Total Items
            </Text>
          </View>
          <View className="bg-red-100 bg-white py-3 rounded-xl flex-grow flex-col justify-center items-center">
            <Image
              className="mb-2"
              source={require("../../assets/images/card01.png")}
            />
            <Text className="font-montBold text-2xl text-red-600">300</Text>
            <Text className="font-montSemiBold text-base text-red-400">
              Total Staffs
            </Text>
          </View>
        </View>
        {/* latest product */}
        <View className="rounded-lg bg-white my-2 p-3">
          {/* card header */}
          <View className="flex-row justify-between items-center border-b border-b-slate-100">
            {/* section 01 */}
            <View className='flex-col mb-3'>
              <Text className="font-montSemiBold text-lg">Newly Arrived</Text>
              <Text className="font-montSemiBold opacity-50">Latest Product</Text>
            </View>
            {/* section 02 */}
            <View>
              <Ionicons name={'ios-medkit-outline'} color={'grey'} size={28} />
            </View>
          </View>
          {/* card picture */}
          <View className="rounded-md">
            <Image className="rounded-md w-full h-[300px]" source={require('../../assets/images/product.jpg')} />
          </View>
          {/* product price */}
          <View className="flex-row justify-between items-center mt-3">
            {/* image pic section */}
            <View className="flex-row justify-between items-center">
              {/* text */}
              <View className="flex-col justify-center items-start">
                <Text className="font-montSemiBold text-sm">Nike Doe Shoes</Text>
                <Text className="font-mont text-xs opacity-50 mt-1">Added 22 Jan 2024 5:59 PM</Text>
              </View>
            </View>
            {/* star section */}
            <View className="flex-col justify-center items-end">
              <Text className="text-xs font-mont opacity-50 mt-1">Price</Text>
              <Text className="text-base font-montSemiBold">Rs 2500</Text>
            </View>
          </View>
        </View>
        {/* latest Reviews */}
        <View className="rounded-lg bg-white mb-4 p-3">
          {/* card header */}
          <View className="flex-row justify-between items-center border-b border-b-slate-100">
            {/* section 01 */}
            <View className='flex-col mb-3'>
              <Text className="font-montSemiBold text-lg">Latest Reviews</Text>
              <Text className="font-montSemiBold opacity-50">Latest Reviews</Text>
            </View>
            {/* section 02 */}
            <View>
              <Ionicons name={'notifications-circle-outline'} color={'grey'} size={30} />
            </View>
          </View>
          {/* card mid header */}
          <View className="flex-row justify-between items-center my-3">
            {/* image pic section */}
            <View className="flex-row justify-between items-center">
              {/* image */}
              <Image className="rounded-full w-12 h-12 mr-3" source={require('../../assets/logos/user-1.jpg')} />
              {/* text */}
              <View className="flex-col justify-center items-start">
                <Text className="font-montSemiBold text-sm">John Doe</Text>
                <Text className="font-mont text-xs opacity-50 mt-1">Posted 22 Jan 2024 5:59 PM</Text>
              </View>
            </View>
            {/* star section */}
            <View className="flex-col justify-center items-center">
              <Text className="text-base">⭐</Text>
              <Text className="text-xs font-mont opacity-50 mt-1">3 stars</Text>
            </View>
          </View>
          {/* card edscription */}
          <View className="my-2">
            <Text className="text-justify font-mont">
              Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis.Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam officia. Odit nostrum qui illum saepe debitis ullam. Laudantium beatae modi fugit ut. Dolores consequatur beatae nihil voluptates rem maiores.
            </Text>
          </View>
          {/* tags */}
          <View className="border-t border-t-slate-100 flex-row justify-around items-center pt-4 pb-2">
            {/* tage 01*/}
            <View className='bg-slate-200 p-2 rounded-md'>
              <Text className="font-montSemiBold opacity-60">#Quality</Text>
            </View>
            {/* tage 02*/}
            <View className='bg-slate-200 p-2 rounded-md'>
              <Text className="font-montSemiBold opacity-60">#Price</Text>
            </View>
            {/* tage 03*/}
            <View className='bg-slate-200 p-2 rounded-md'>
              <Text className="font-montSemiBold opacity-60">#Trust</Text>
            </View>
          </View>
          {/* see more */}
          <TouchableOpacity className="bg-green-200 p-2 rounded-md  mt-2" activeOpacity={0.7}>
            <Text className="text-center text-green-800 font-montSemiBold text-base">See More</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </>

  );
}
