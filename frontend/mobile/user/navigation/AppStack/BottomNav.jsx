import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Ionicons } from '@expo/vector-icons'
import Notification from '../../screens/Notification/Notification';
import Orders from '../../screens/Orders/Orders';
import Profile from '../../screens/Profile/Profile';
import HomeStack from './HomeStack/HomeStack';
import Home from '../../screens/Home/Home';

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
                    if (route.name === 'Home') {
                        iconName = focused ? "home" : "home-outline"
                    } else if (route.name === "Notification") {
                        iconName = focused ? "notifications" : "notifications-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "person-circle" : "person-circle-outline";
                    } else if (route.name === "Orders") {
                        iconName = focused ? "wallet" : "wallet-outline";
                    }
                    return <Ionicons name={iconName} size={25} color={color} />
                }
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Orders' component={Orders} />
            <Tab.Screen name='Notification' component={Notification} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}