import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../../screens/Home/Home'
import Welcome from '../../../screens/Welcome'

export default function HomeStack() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            {/* <Stack.Screen options={{ headerShown: true }} name='index' component={Home} /> */}
            <Stack.Screen options={{ headerShown: true }} name='product' component={Welcome} />
        </Stack.Navigator>
    )
}