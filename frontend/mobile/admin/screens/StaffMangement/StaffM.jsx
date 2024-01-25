import { View, Text } from 'react-native'
import React from 'react'
import AppHeader from '../../components/Header/AppHeader'
import { useNavigation } from '@react-navigation/native';

export default function StaffM() {
  
  const navigation = useNavigation();
  return (
    <>
      <AppHeader navigation={navigation} title={'staffs'}/>
    </>
  )
}