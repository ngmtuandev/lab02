import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <SafeAreaView className='mt-10'>
        {/* <Image 
        // style={{zIndex: -3}}
        source={require('../assets/bg.png')}></Image> */}
        <View>
            <View className='w-[330px] h-[54px] border flex flex-row'>
                <Text className=''>ảnh</Text>
                <TextInput className='w-[90%] bg-gray-500'></TextInput>
            </View>
            <View className='w-[330px] h-[54px] border flex flex-row'>
                <Text className=''>ảnh</Text>
                <TextInput className='w-[80%] bg-gray-500'></TextInput>
                <Text>ảnh</Text>
            </View>
            <View className='w-[330px] h-[45px] flex justify-center items-center bg-[#060000]'>
                <Text className='text-white'>LOGIN</Text>
            </View>
            <TouchableOpacity>
                <Text>Forgot your password?</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen