import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import Header from './components/Header'

export default function Product() {
    const image = { uri: 'https://s.yimg.com/ny/api/res/1.2/QTfAk2wj4XN8g0uvTpOx0w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQzNA--/https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2018-12%2F4830f030-04d6-11e9-9efb-324de7e29ad5&client=a1acac3e1b3290917d92&signature=b6d816abc2c61973b8e76c036d99c0448c32a1f6' };
    return (
        <>
            <SafeAreaView className='flex-1 bg-white'>
                {/* header row */}
                <Header/>
                <ScrollView className='flex-1 px-3'>
                    <ImageBackground source={image} resizeMode='cover' imageStyle={{ borderRadius: 15 }} className='w-full h-[250px] rounded-xl'>
                    </ImageBackground>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}