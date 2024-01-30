import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MainHeader from '../../components/MainHeader/MainHeader'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ImageParallax from './components/ImageParallax'
import HomeCategory from './components/HomeCategory'
import { ProductList } from './ProductList'
import ProductCard from './components/ProductCard'
export default function Home() {
  const navigation = useNavigation()
  return (
    <>
      <MainHeader />
      <FlatList
        style={{ backgroundColor: 'white' }}
        // columnWrapperStyle={{justifyContent:'center'}}
        ListHeaderComponent={
          <>
            {/* categories section */}
            <View className="mt-0">
              <HomeCategory />
            </View>
            {/* iamge paralla */}
            <ImageParallax />
            <View className='mb-2'></View>
          </>
        }
        ListEmptyComponent={
          <View className="flex-col justify-center items-center mt-8">
            <Text className="font-montSemiBold text-lg">
              No Results Found
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
        data={ProductList}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <ProductCard item={item} />
          )
        }}
      />
    </>
  )
}