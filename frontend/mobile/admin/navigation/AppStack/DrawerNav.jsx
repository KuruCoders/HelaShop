import { View, Text, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNav from './StackNav'
import UserM from '../../screens/UserMangement/UserM'
import PaymentM from '../../screens/PaymentManagement/PaymentM'
import InventoryM from '../../screens/InventoryManagement/InventoryM'
import CustomDrawerNav from './CustomDrawerNav'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StaffStackNav from './StaffStack/StaffStackNav'

export default function DrawerNav() {
    const Drawer = createDrawerNavigator()
    return (
        <>
            <Drawer.Navigator
                initialRouteName='Dashboard'
                screenOptions={
                    ({ route, navigation }) => ({
                        headerShown:false,
                        headerTitleStyle: { fontSize: 0 },
                        headerRight: () => (
                            <View className="flex-row items-center">
                                <Image className="rounded-lg w-[30px] h-[30px] mx-2" source={require('../../assets/lk.jpg')} />
                                <TouchableOpacity className="bg-slate-100 rounded-full p-1 mx-2" activeOpacity={0.6}>
                                    <Ionicons name={'notifications-circle-outline'} color={'grey'} size={26} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.9} onPress={navigation.toggleDrawer}>
                                    <Image className="rounded-full w-9 h-9 mx-2" source={require('../../assets/logos/user-1.jpg')} />
                                </TouchableOpacity>
                            </View>
                        ),
                        headerLeft: () => {
                            if (route.name === "Dashboard") {
                                return <Image className="w-[155px] h-[30px] ml-4" source={require('../../assets/logos/logoAll.jpg')} />
                            } else {
                                return <Text className="ml-2 text-xl font-montBold ">{route.name}</Text>
                            }
                        },
                        drawerIcon: ({ focused, color }) => {
                            let iconName
                            if (route.name === "Dashboard") {
                                iconName = focused ? "home" : "home-outline"
                            } else if (route.name === "User Management") {
                                iconName = focused ? "person" : "person-outline"
                            } else if (route.name === "Payment Management") {
                                iconName = focused ? "card" : "card-outline"
                            } else if (route.name === "Store Management") {
                                iconName = focused ? "medkit" : "medkit-outline"
                            } else if (route.name === "Staff Management") {
                                iconName = focused ? "people" : "people-outline"
                            }
                            return <Ionicons name={iconName} size={20} color={color} />
                        },
                        drawerLabelStyle: { fontSize: 13, marginStart: -12, fontFamily: "Montserrat-SemiBold" }
                    })
                }
                drawerContent={(props) => <CustomDrawerNav prop={props} />}
            >
                <Drawer.Screen name="Dashboard" component={StackNav} />
                <Drawer.Screen name="User Management" component={UserM} />
                <Drawer.Screen name="Payment Management" component={PaymentM} />
                <Drawer.Screen name="Store Management" component={InventoryM} />
                <Drawer.Screen  options={{headerShown:false}} name="Staff Management" component={StaffStackNav} />
            </Drawer.Navigator>
        </>
    )
}