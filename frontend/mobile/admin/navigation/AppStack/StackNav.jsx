import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNav from './BottomNav'

export default function StackNav() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name='home' component={BottomNav} />
    </Stack.Navigator>
  )
}