import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNav from './BottomNav'
import StaffDetail from '../../screens/StaffMangement/StaffDetail'

const Stack = createNativeStackNavigator()

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name='home' component={BottomNav} />
      <Stack.Screen options={{ headerShown: false }} name='staffDetail' component={StaffDetail} />
    </Stack.Navigator>
  )
}