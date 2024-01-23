import { View, Text, Image, Alert } from 'react-native'
import React from 'react'
import { Appbar, Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export default function AppHeader() {
    const navigation = useNavigation();

    const openDrawer = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
      navigation.openDrawer();
    };
    
  
    return (
        <Appbar.Header className="flex-row justify-between items-center px-[16px] bg-white shadow-sm">
            <Image className="w-[140px] h-[28px]" source={require('../../assets/logos/logoAll.jpg')} />
            <Text onPress={openDrawer}>fdsfdsfsdfsdfsfsdfsdfsdf</Text>
            <Avatar.Image size={35} source={require('../../assets/logos/user-1.jpg')} onPress={openDrawer}/>
        </Appbar.Header>
    )
}