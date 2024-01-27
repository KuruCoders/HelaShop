import React from 'react'
import { NavigationContainer, useRoute } from '@react-navigation/native'
import DrawerNav from './DrawerNav'
export default function AppStack() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  )
}