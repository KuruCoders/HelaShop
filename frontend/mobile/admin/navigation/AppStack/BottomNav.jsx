import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import DashBoard from '../../screens/Dashboard/DashBoard'
import Profile from '../../screens/Profile/Profile'
import { Ionicons } from '@expo/vector-icons'
export default function BottomNav() {

    const Tab = createMaterialBottomTabNavigator()
    return (
        <Tab.Navigator
            activeColor="#017aff"
            inactiveColor="grey"
            activeIndicatorStyle={{ backgroundColor: "#f7f7f7" }}
            barStyle={{ backgroundColor: '#ffffff', height: 70 }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    if (route.name === 'Dashboard') {
                        iconName = focused ? "home" : "home-outline"
                    } else if (route.name === "Notification") {
                        iconName = focused ? "notifications" : "notifications-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person-circle" : "person-circle-outline";
                    }
                    return <Ionicons name={iconName} size={25} color={color} />
                }
            })}
        >
            <Tab.Screen name='Dashboard' component={DashBoard} />
            <Tab.Screen name='Notification' component={DashBoard} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>

    )
}