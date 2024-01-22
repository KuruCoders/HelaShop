import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './BottomNav'
import DrawerNav from './DrawerNav'

export default function AppStack() {
  return (
    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>
  )
}