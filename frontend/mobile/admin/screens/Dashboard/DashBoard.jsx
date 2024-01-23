import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'
export default function DashBoard() {
  return (
    <ScrollView className="px-[16px] pt-3 bg-back">
      {/* row 1 */}
      <View className="flex-row justify-around items-center space-x-4">
        <View className="bg-green-100 py-3 rounded-xl flex-grow flex-col justify-center items-center" style={{ elevation: 1 }}>
          <Image
            className="mb-2"
            source={require("../../assets/images/card04.png")}
          />
          <Text className="font-montBold text-2xl text-green-600">$300</Text>
          <Text className="font-montSemiBold text-base text-green-400">
            Total Sales
          </Text>
        </View>
        <View className="bg-blue-100 py-3 rounded-xl flex-grow flex-col justify-center items-center" style={{ elevation: 1 }}>
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
      <View className="flex-row justify-around items-center space-x-4 mt-4">
        <View className="bg-yellow-100 py-3 rounded-xl flex-grow flex-col justify-center items-center" style={{ elevation: 1 }}>
          <Image
            className="mb-2"
            source={require("../../assets/images/card02.png")}
          />
          <Text className="font-montBold text-2xl text-yellow-600">100</Text>
          <Text className="font-montSemiBold text-base text-yellow-400">
            Total Items
          </Text>
        </View>
        <View className="bg-red-100 py-3 rounded-xl flex-grow flex-col justify-center items-center" style={{ elevation: 1 }}>
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
      {/* latest Reviews */}
      <View className="rounded-lg bg-white my-4 p-3">
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
  );
}
