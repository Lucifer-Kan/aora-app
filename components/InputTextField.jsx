import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const InputTextField = ({ title, onChangeTextHandler, placeholder, value, otherStyles, titleStyles, keyboardType }) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={`font-pregular text-base text-gray-300 ${titleStyles}`}>{title}</Text>

      <View className={'border-2 rounded-lg border-black-100 h-16 px-4 w-full focus:border-secondary items-center flex-row'}>
        <TextInput
          onChangeText={onChangeTextHandler}
          className='flex-1 text-white text-base'
          placeholder={placeholder}
          value={value}
          placeholderTextColor='#7B7B8B'
          keyboardType={keyboardType}
          secureTextEntry={title === 'Password' && !showPassword}

        />
        {(title === 'Password' && <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={!showPassword ? icons.eye : icons.eyeHide}
            className='w-6 h-6'
            resizeMode='contain'
          />
        </TouchableOpacity>)}
      </View>
    </View>

  )
}

export default InputTextField