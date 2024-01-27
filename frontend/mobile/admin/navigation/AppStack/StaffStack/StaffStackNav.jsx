import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StaffDetail from '../../../screens/StaffMangement/StaffDetail'
import StaffM from '../../../screens/StaffMangement/StaffM'

const StaffStack = createNativeStackNavigator()

export default function StaffStackNav() {
  return (
    <StaffStack.Navigator initialRouteName='staffList'>
      <StaffStack.Screen options={{ headerShown: false }} name='staffList' component={StaffM} />
      <StaffStack.Screen options={{ headerShown: false }} name='staffDetail' component={StaffDetail} />
    </StaffStack.Navigator>
  )
}