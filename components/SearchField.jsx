import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const SearchField = ({ onChangeTextHandler, placeholder, value, otherStyles, keyboardType }) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <View className={'border-2 rounded-lg border-black-100 h-16 px-4 w-full focus:border-secondary items-center flex-row'}>
                <TextInput
                    onChangeText={onChangeTextHandler}
                    className='flex-1 text-white text-base'
                    placeholder={placeholder}
                    value={value}
                    placeholderTextColor='#7B7B8B'
                    keyboardType={keyboardType}

                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image
                        source={icons.search}
                        className='w-6 h-6'
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default SearchField