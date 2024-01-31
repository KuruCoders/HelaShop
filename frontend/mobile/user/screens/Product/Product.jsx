import { View, Text, ImageBackground, TouchableOpacity , Image, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Header from './components/Header'
import { Ionicons } from '@expo/vector-icons'
import { ProductList } from '../Home/ProductList'
import { useNavigation } from '@react-navigation/native'
import CusColors from '../../constants/Colors'
import ProductCard from '../Home/components/ProductCard'
import ProductFooter from './components/ProductFooter'
import ReviewCard from './components/ReviewCard'
import ProductBottomSheet from './components/ProductBottomSheet'
export default function Product() {
    const bottomSheetRef = useRef()
    const handleClosePress = () => bottomSheetRef.current?.close()
    // const handleOpenPress = () => bottomSheetRef.current?.expand()
    const handleOpenPress = () => bottomSheetRef.current?.snapToIndex(0)

    let width = Dimensions.get('screen').width / 2 - 8
    const navigation = useNavigation()
    const image = { uri: 'https://s.yimg.com/ny/api/res/1.2/QTfAk2wj4XN8g0uvTpOx0w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQzNA--/https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2018-12%2F4830f030-04d6-11e9-9efb-324de7e29ad5&client=a1acac3e1b3290917d92&signature=b6d816abc2c61973b8e76c036d99c0448c32a1f6' };
    return (
        <>
            <SafeAreaView className='flex-1 bg-white'>
                {/* header row */}
                <Header />
                {/* main content */}
                <FlatList
                    style={{ backgroundColor: 'white' }}
                    // columnWrapperStyle={{justifyContent:'center'}}
                    ListHeaderComponent={
                        <>
                            <View className='px-3'>
                                <ImageBackground source={image} resizeMode='cover' imageStyle={{ borderRadius: 15 }} className='w-full h-[250px] rounded-xl'>
                                </ImageBackground>
                                {/* row 02 */}
                                <View className='flex-row justify-between items-center mt-2'>
                                    {/* pname */}
                                    <View className='flex-row justify-between items-center'>
                                        <View className='flex-row items-center'>
                                            <Text ellipsizeMode='tail' numberOfLines={1} className='capitalize font-montMedium text-xs '>⭐</Text>
                                            <Text ellipsizeMode='tail' numberOfLines={1} className='capitalize font-montMedium text-xs opacity-60'> 4.5 | </Text>
                                        </View>
                                        <Text ellipsizeMode='tail' numberOfLines={1} className='capitalize font-montMedium text-xs opacity-60'>100 reviews</Text>
                                    </View>
                                    {/* pprice */}
                                    <View className=''>
                                        <Text ellipsizeMode='tail' numberOfLines={1} className='capitalize font-montMedium text-xs opacity-60'>Available</Text>
                                    </View>
                                </View>

                                {/* row 01 */}
                                <View className='flex-row justify-between items-center mt-0'>
                                    {/* pname */}
                                    <View className='flex-1'>
                                        <Text ellipsizeMode='tail' numberOfLines={1} className='capitalize font-montBold text-xl'>nike jord</Text>
                                    </View>
                                    {/* pprice */}
                                    <View className='flex-1'>
                                        <Text ellipsizeMode='tail' numberOfLines={1} className='capitalize text-right font-montBold text-xl text-green-600'>Rs 35000</Text>
                                    </View>
                                </View>

                                {/* row3 */}
                                <View className='mt-3 flex-1'>
                                    <Text className='text-justify font-montMedium opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi rerum consequatur magni veniam quas inventore quis earum doloribus adipisci cum corporis repellendus, voluptates placeat maxime ex saepe quo qui aperiam?</Text>
                                </View>

                                {/* reveiws and ratings compo */}
                                <TouchableOpacity   onPress={() => { handleOpenPress() }} activeOpacity={1}>
                                    <ReviewCard />
                                </TouchableOpacity >
                                {/* row4 */}
                                <View className='flex-row justify-between items-center mt-3'>
                                    <Text className="font-montSemiBold text-lg opacity-60">Similar Products</Text>
                                    <Text className="font-montSemiBold text-lg">🛒</Text>
                                </View>
                                <View className='mb-1'></View>
                            </View>
                        </>
                    }
                    ListEmptyComponent={
                        <View className="flex-col justify-center items-center my-4">
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
                <ProductFooter />
                <ProductBottomSheet ref={bottomSheetRef}/>
            </SafeAreaView>
        </>
    )
}