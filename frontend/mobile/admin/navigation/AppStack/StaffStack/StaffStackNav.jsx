import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StaffDetail from '../../../screens/StaffMangement/StaffDetail'
import StaffM from '../../../screens/StaffMangement/StaffM'
import StaffAdd from '../../../screens/StaffMangement/StaffAdd'

const StaffStack = createNativeStackNavigator()

export default function StaffStackNav() {
    return (
        <StaffStack.Navigator initialRouteName='staffList'>
            <StaffStack.Screen options={{ headerShown: false }} name='staffList' component={StaffM} />
            <StaffStack.Screen options={{ headerShown: false }} name='staffDetail' component={StaffDetail} />
            <StaffStack.Screen
                options={{
                    headerShown: true,
                    title: 'Create Staff',
                    headerTitleStyle: { fontFamily: 'Montserrat-SemiBold' }
                }} name='staffAdd' component={StaffAdd} />
        </StaffStack.Navigator>
    )
}