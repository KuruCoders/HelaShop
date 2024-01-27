import React from 'react'
import { Appbar, Avatar } from 'react-native-paper'
import { Text } from 'react-native'

export default function ProfileHeader() {
    return (
        <Appbar.Header className="flex-row justify-between items-center px-[16px] bg-white shadow-sm">
            <Text className="font-montBold text-3xl capitalize">Profile</Text>
            <Text className="font-montBold text-2xl capitalize">🛠</Text>
        </Appbar.Header>
    )
}