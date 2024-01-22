import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNav from './StackNav'
import UserM from '../../screens/UserMangement/UserM'
import PaymentM from '../../screens/PaymentManagement/PaymentM'
import InventoryM from '../../screens/InventoryManagement/InventoryM'
import StaffM from '../../screens/StaffMangement/StaffM'
import Profile from '../../screens/Profile/Profile'

export default function DrawerNav() {
    const Drawer = createDrawerNavigator()
  return (
      <Drawer.Navigator >
          <Drawer.Screen name="Dashboard" component={StackNav}/>
          <Drawer.Screen name="User Management" component={UserM}/>
          <Drawer.Screen name="Payment Management" component={PaymentM}/>
          <Drawer.Screen name="Inventory Management" component={InventoryM}/>
          <Drawer.Screen name="Staff Management" component={StaffM}/>
          {/* <Drawer.Screen name="Logout" component={''}/> */}
    </Drawer.Navigator>
  )
}