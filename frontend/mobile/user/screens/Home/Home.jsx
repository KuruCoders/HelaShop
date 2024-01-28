import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MainHeader from '../../components/MainHeader/MainHeader'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImageParallax from './components/ImageParallax'
export default function Home() {
  const navogation = useNavigation()
  return (
    <>
      <MainHeader />
      <ImageParallax/>
    </>
  )
}