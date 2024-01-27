import {
  View,
  Text
} from "react-native";
import React, { useState } from "react";
import AppHeader from "../../components/Header/AppHeader";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import StaffCategoryCard from "./components/StaffCategoryCard";
import { staffList } from "./staff";
import FabCustom from "../../components/FloatingButton/FabCustom";
import PdfHtml from "../../constants/PdfHtml";
import StaffItemCard from "./components/StaffItemCard";
import { Ionicons } from '@expo/vector-icons'

export default function StaffM() {
  const navigation = useNavigation();
  const [filteredData, setFilteredData] = useState(staffList);
  const handleSearch = (text) => {
    const searchedData = text
      ? staffList.filter((staff) => {
        return (
          staff.name.toLowerCase().includes(text.toLowerCase()) ||
          staff.email.toLowerCase().includes(text.toLowerCase())
        );
      })
      : staffList;
    setFilteredData(searchedData);
  };
  const generatePdf = async () => {
    PdfHtml.sharePdf(
      "Staff List",
      staffList.length,
      ["id", "email", "name"],
      staffList.map((item) => [item.id, item.name, item.email])
    );
  };
  const handleAdd = () => {
    navigation.navigate('staffAdd')
  };
  return (
    <>
      <AppHeader navigation={navigation} title={"staffs"} handleSearch={handleSearch} generatePdf={generatePdf} />
      {/* the categoryscroll view slider */}
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={filteredData}
        ListHeaderComponent={
          <>
            <StaffCategoryCard />
            <Text className="bg-white px-[16px] py-2 text-xl font-montBold mt-1">
              Staff List
            </Text>
          </>
        }
        ListEmptyComponent={
          <View className="flex-col justify-center items-center mt-8">
            <Text className="font-montSemiBold text-lg">
              No Results Found
            </Text>
          </View>
        }
        ItemSeparatorComponent={
          <View className="bg-back h-[1px]"></View>
        }
        renderItem={({ item }) => {
          return <StaffItemCard item={item} />;
        }}
      />
      {/* fab */}
      <FabCustom handleAdd={handleAdd} />
    </>
  );
}
