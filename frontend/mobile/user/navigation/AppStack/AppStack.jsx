import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNav from './StackNav'

export default function AppStack() {
    return (
        <NavigationContainer>
            <StackNav/>
        </NavigationContainer>
    )
}