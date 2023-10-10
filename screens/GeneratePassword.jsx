import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import CheckBox from 'react-native-check-box'
import React, { useState } from 'react'
const GeneratePassword = () => {
    const [checkLower, setCheckLower] = useState(false)
    const [checkUpper, setCheckUpper] = useState(false)
    const [checkNumber, setCheckNumber] = useState(false)
    const [checkSym, setCheckSym] = useState(false)
    const [lengthPass, setLengPass] = useState(0) 
    const [password, setPassword] = useState([])
    function generateLetter(length) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        const lengthCharacter = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * lengthCharacter));
          counter += 1;
        }
        return result;
    }

    function generateUpper(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lengthCharacter = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * lengthCharacter));
          counter += 1;
        }
        return result;
    }

    function generateNumber(length) {
        let result = '';
        const characters = '0123456789';
        const lengthCharacter = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * lengthCharacter));
          counter += 1;
        }
        return result;
    }

    function generateSymbol(length) {
        let result = '';
        const characters = '!@#$%^&*()_+';
        const lengthCharacter = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * lengthCharacter));
          counter += 1;
        }
        return result;
    }

    const handleCreatePassword = () => {
        console.log(lengthPass)
        const pass = []
        for (let i=0; i<= +lengthPass; i++) {
            if (+pass.length < +lengthPass - 1) {
                if (checkLower) pass.push(generateLetter(1))
                if (checkNumber) pass.push(generateNumber(1))
                if (checkUpper) pass.push(generateUpper(1))
                if (checkSym) pass.push(generateSymbol(1))
            }
        }
        setPassword(pass)
        console.log('password >>>', password.splice(',').join(''))
    }
    
    
  return (
    <View className='flex-col justify-center items-center mt-10 w-screen h-screen bg-[#23235B]'>
      <Text>PASSWORD GENERATOR</Text>
      <View>
        <View className='w-[300px] h-[55px] bg-[#151537] flex justify-center items-center'>
            <Text className='text-white'>{password}</Text>
        </View>
        <View className=''>
            <View className='flex-row justify-center items-center mt-4'>
                <Text className='text-white text-[18px]'>Password Length : </Text>
                <TextInput className='bg-white w-[118px]' 
                value={lengthPass}
                onChangeText={(value) => {
                    setLengPass(value)
                    console.log('length pass >>>', lengthPass)
                }}
                ></TextInput>
            </View>
            <View className='flex-row justify-center items-center mt-4'>
                <Text className='text-white text-[18px]'>Lower letter : </Text>
                <CheckBox isChecked={checkLower} onClick={() => setCheckLower(!checkLower)}></CheckBox>
            </View>
            <View className='flex-row justify-center items-center mt-4'>
                <Text className='text-white text-[18px]'>Upper letter : </Text>
                <CheckBox isChecked={checkUpper} onClick={() => setCheckUpper(!checkUpper)}></CheckBox>
            </View>
            <View className='flex-row justify-center items-center mt-4'>
                <Text className='text-white text-[18px]'>Number : </Text>
                <CheckBox isChecked={checkNumber} onClick={() => setCheckNumber(!checkNumber)}></CheckBox>
            </View>
            <View className='flex-row justify-center items-center mt-4'>
                <Text className='text-white text-[18px]'>Symbol : </Text>
                <CheckBox isChecked={checkSym} onClick={() => setCheckSym(!checkSym)}></CheckBox>
            </View>
        </View>
      </View>
      <TouchableOpacity 
      onPress={handleCreatePassword}
      className='w-[260px] h-[55px] bg-[#3B3B98] rounded-lg flex justify-center items-center mt-5'>
        <Text className='text-white'>Generate Password</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GeneratePassword