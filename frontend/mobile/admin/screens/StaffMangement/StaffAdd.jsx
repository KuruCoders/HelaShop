import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import CusColors from '../../constants/Colors'
import In from '../../components/Input/In'
import { TextInput } from 'react-native-paper'
export default function StaffAdd() {
    const [errors, setErrors] = useState('Ente name')
    return (
        <ScrollView className="px-[12px] bg-back mt-2">
            {/* image card */}
            <View className="bg-white rounded-lg p-3 flex-col justify-center">
                {/* text row */}
                <View className="flex-row justify-between items-center">
                    <Text className="font-montBold text-lg opacity-60">Add Staff Details</Text>
                    <Ionicons name={'images'} color={'grey'} size={25} />
                </View>
                {/* imageuplad preview */}
                <View className="flex-col justify-center items-center my-6">
                    <View className="border border-slate-300 p-2 rounded-full">
                        <Image className="rounded-full w-[120px] h-[120px]" source={require('../../assets/logos/user-1.jpg')} />
                    </View>
                    <Text className="font-montMedium opacity-50 mx-16 text-center mt-3">Allowed *.jpeg, *.jpg, *.png,  max size of 3 Mb</Text>
                </View>
                {/* form */}
                <View className="mt-0">
                    {/* form start */}
                    {/* row 1*/}
                    <View className="flex-row justify-between items-center space-x-3">
                        <View className="flex-1">
                            <In
                                label="Email"
                                placeholder="Enter email"
                                iconName={'email'}
                                errors={errors}
                                onFocus={() => {
                                    setErrors(null)
                                }} />
                            <Text style={{ color: 'red' }}>{errors}</Text>
                        </View>
                        <View className="">
                            <In
                                label="Age"
                                placeholder="Enter Age"
                                maxLength={2}
                                errors={errors} onFocus={() => {
                                    setErrors(null)
                                }} />
                            <Text style={{ color: 'red' }}>{errors}</Text>
                        </View>
                    </View>

                    {/* row 2 */}
                    <View className="flex-row justify-between items-center space-x-3">
                        <View className="flex-1">
                            <In
                                label="Telephone"
                                placeholder="077546521"
                                maxLength={10}
                                iconName={'phone'}
                                errors={errors} onFocus={() => {
                                    setErrors(null)
                                }} />
                            <Text style={{ color: 'red' }}>{errors}</Text>
                        </View>
                        <View className="flex-1">
                            <In
                                label="Name"
                                placeholder="Enter name"
                                errors={errors}
                                onFocus={() => {
                                    setErrors(null)
                                }} />
                            <Text style={{ color: 'red' }}>{errors}</Text>
                        </View>
                    </View>

                    {/* row 3 */}
                    <View className="flex-row justify-between items-center space-x-3">
                        <View className="flex-1">
                            <In
                                disabled
                                label="Gender"
                                placeholder="Enter gender"
                                iconName={'gender-male-female'}
                                errors={errors}
                                onFocus={() => {
                                    setErrors(null)
                                }} />
                            <Text style={{ color: 'red' }}>{errors}</Text>
                        </View>
                        <View className="flex-1">
                            <In
                                label="Salary"
                                placeholder="20000"
                                maxLength={12}
                                iconName={'cash'}
                                errors={errors} onFocus={() => {
                                    setErrors(null)
                                }} />
                            <Text style={{ color: 'red' }}>{errors}</Text>
                        </View>
                    </View>

                    {/* row 4 */}
                    <View className="flex-row justify-between items-center space-x-3">
                        <View className="flex-1">
                            <In
                                label="Age"
                                placeholder="Enter Age"
                                maxLength={2}
                                errors={errors} onFocus={() => {
                                    setErrors(null)
                                }} />
                            <Text style={{ color: 'red' }}>{errors}</Text>
                        </View>
                        <View className="flex-1">
                            <In
                                label="Email"
                                placeholder="Enter email"
                                iconName={'email'}
                                errors={errors}
                                onFocus={() => {
                                    setErrors(null)
                                }} />
                            <Text style={{ color: 'red' }}>{errors}</Text>
                        </View>
                    </View>

                </View>
                {/* btns */}
                <View className="flex-row justify-around items-center my-2">
                    <TouchableOpacity activeOpacity={0.9} className="p-3 rounded-lg bg-yellow-200 flex-1 mr-3">
                        <Text className="font-montSemiBold text-center text-yellow-700">Go Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} className="p-3 rounded-lg bg-green-200 flex-1">
                        <Text className="font-montSemiBold text-center text-green-700">Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}