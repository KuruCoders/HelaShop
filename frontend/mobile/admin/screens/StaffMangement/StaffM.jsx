import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AppHeader from "../../components/Header/AppHeader";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import StaffCategoryCard from "./components/StaffCategoryCard";
import { staffList } from "./staff";
import { Ionicons } from '@expo/vector-icons'
import { FAB, Portal } from 'react-native-paper';
import FabCustom from "../../components/FloatingButton/FabCustom";

export default function StaffM() {
  const navigation = useNavigation();
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  return (
    <>
      <AppHeader navigation={navigation} title={"staffs"} />

      {/* the categoryscroll view slider */}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={staffList}
        ListHeaderComponent={
          <>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="px-[12px] bg-white">
              {/* card starts */}
              <StaffCategoryCard />
              <StaffCategoryCard />
              <StaffCategoryCard />
              <StaffCategoryCard />
              <StaffCategoryCard />
            </ScrollView>
            <Text className="bg-white px-[16px] pt-2 pb-0 text-xl font-montBold mt-1">Staff List</Text>
          </>
        }
        ListEmptyComponent={
          <View className="flex-col justify-center items-center mt-8">
            <Text className="font-montSemiBold text-lg">No Results Found</Text>
          </View>
        }
        ItemSeparatorComponent={
          <View className="bg-back h-[1px]"></View>
        }
        renderItem={({ item }) => {
          return <View key={item.id} className="p-[12px] py-4 bg-white flex-row justify-between items-center">
            {/* left */}
            <View className="flex-row flex-1">
              {/* image */}
              <Image
                className="w-[60px] h-[60px] rounded-full"
                source={{ uri: (item.pic) }} />
              {/* text */}
              <View className="flex-col justify-center items-start ml-4">
                <Text className="font-montSemiBold text-base capitalize">{item.name}</Text>
                <Text className="opacity-50 font-mont ">{item.email}</Text>
                <Text className="font-mont text-green-500">Joined : 20th Jan 2024</Text>
              </View>
            </View>
            {/* right */}
            <View>
              <Ionicons name="chevron-forward-outline" size={30} color={'grey'} />
            </View>
          </View>
        }}
      />
      {/* fab */}
      <FabCustom/>
    </>
  );
}
