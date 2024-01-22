import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNav from './StackNav'
import UserM from '../../screens/UserMangement/UserM'
import PaymentM from '../../screens/PaymentManagement/PaymentM'
import InventoryM from '../../screens/InventoryManagement/InventoryM'
import StaffM from '../../screens/StaffMangement/StaffM'
import Profile from '../../screens/Profile/Profile'
import CustomDrawerNav from './CustomDrawerNav'
import { Ionicons } from '@expo/vector-icons'

export default function DrawerNav() {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator
            screenOptions={
                ({ route }) => ({
                    drawerIcon: ({ focused, color }) => {
                        let iconName
                        if (route.name === "Dashboard") {
                            iconName = focused ? "home" : "home-outline"
                        } else if (route.name === "User Management") {
                            iconName = focused ? "person" : "person-outline"
                        } else if (route.name === "Payment Management") {
                            iconName = focused ? "card" : "card-outline"
                        } else if (route.name === "Inventory Management") {
                            iconName = focused ? "medkit" : "medkit-outline"
                        } else if (route.name === "Staff Management") {
                            iconName = focused ? "people" : "people-outline"
                        }
                        return <Ionicons name={iconName} size={20} color={color} />
                    },
                    drawerLabelStyle: {fontSize: 13 , marginStart:-12, fontFamily:"Montserrat-SemiBold"}
                })
            }
            drawerContent={(props) => <CustomDrawerNav prop={props} />}
        >
            <Drawer.Screen name="Dashboard" component={StackNav} />
            <Drawer.Screen name="User Management" component={UserM} />
            <Drawer.Screen name="Payment Management" component={PaymentM} />
            <Drawer.Screen name="Inventory Management" component={InventoryM} />
            <Drawer.Screen name="Staff Management" component={StaffM} />
            {/* <Drawer.Screen name="Logout" component={''}/> */}
        </Drawer.Navigator>
    )
}