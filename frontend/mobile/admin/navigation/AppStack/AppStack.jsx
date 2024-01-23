import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, useRoute } from '@react-navigation/native'
import BottomNav from './BottomNav'
import DrawerNav from './DrawerNav'
import AppHeader from '../../components/Header/AppHeader'
export default function AppStack() {
  // const route = useRoute()
  // const showHeaderOrNot = route.name !== ("Profile" || "Notification")
  return (
    <NavigationContainer>
      {/* <AppHeader /> */}
      <DrawerNav />
    </NavigationContainer>
  )
}