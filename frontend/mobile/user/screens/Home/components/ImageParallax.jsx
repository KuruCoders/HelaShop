import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'

const imageData = [
    // require('../../../assets/images/banner01.jpg'),
    // require('../../../assets/images/banner02.jpg'),
    // require('../../../assets/images/banner03.jpg'),
    require('../../../assets/images/banner05.jpg'),
    require('../../../assets/images/banner04.jpg'),
    require('../../../assets/images/banner06.jpg'),
    require('../../../assets/images/banner07.jpg'),
];
const { width: screenWidth } = Dimensions.get('window');
export default function ImageParallax() {

    return (
        <Carousel
            data={imageData}
            loop={true}
            autoplay={true}
            renderItem={ItemCard}
            hasParallaxImages={true}
            sliderWidth={screenWidth} // Use your desired width
            firstItem={1}
            autoplayInterval={4000}
            itemWidth={screenWidth - 70} // Use your desired width
            slideStyle={{ display: 'flex', alignItems: 'center' }}

        />
    )
}

const ItemCard = ({ item, index }, parallaxProps) => {
    return (
        <View className='mt-1' style={{width: screenWidth - 70, height: 200 }}>
            <ParallaxImage
                source={item}
                containerStyle={{ borderRadius: 10, flex: 1 }}
                style={{ resizeMode: 'contain' }}
                parallaxFactor={1}
                {...parallaxProps}
            />
        </View>
    )
}