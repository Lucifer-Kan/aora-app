import { ScrollView, StyleSheet, Image, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { images } from '../../constants'
import InputTextField from '../../components/InputTextField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appWriteConfig'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignUp = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { setUser, setIsLoggedIn } = useGlobalContext();

    const submit = async () => {
        if (!formData.userName || !formData.email || !formData.password) {
            Alert.alert('Validation Failed', 'Please enter all the fields');
        }

        setIsSubmitting(true);

        try {
            const response = await createUser(formData.userName, formData.email, formData.password);
            setUser(response);
            setIsLoggedIn(true);
            router.replace('/home')
        } catch (error) {
            console.log(error);
            Alert.alert('Error', error);
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView contentContainerStyle={'height: 100%'}>
                <View className='min-h-[85vh] px-4 my-6 justify-center'>
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className='h-[34px] w-[115px]'
                    />
                    <Text className='text-2xl text-white mt-5 font-psemibold'>Sign up</Text>
                    <InputTextField
                        title='User Name'
                        value={formData.userName}
                        otherStyles='mt-10'
                        onChangeTextHandler={(e) => setFormData({ ...formData, userName: e })}
                        keyboardType='default'
                        placeholder='Enter your user name'

                    />
                    <InputTextField
                        title='Email'
                        value={formData.email}
                        otherStyles='mt-7'
                        onChangeTextHandler={(e) => setFormData({ ...formData, email: e })}
                        keyboardType='email-address'
                        placeholder='Enter your email address'

                    />
                    <InputTextField
                        title='Password'
                        value={formData.password}
                        otherStyles='mt-7'
                        onChangeTextHandler={(e) => setFormData({ ...formData, password: e })}
                        keyboardType='default'
                        placeholder='Enter your password'
                    />

                    <CustomButton title='Sign Up'
                        onPress={() => submit()}
                        containerStyles={'mt-7'}
                        isLoading={isSubmitting}
                    />
                    <View className='mt-7 justify-center items-center'>
                        <Text className='text-base text-white font-pregular'>
                            Already have an account?{' '}
                            <Link href='/sign-in' className='text-secondary'
                            >Sign in</Link>
                        </Text>
                    </View>
                </View>
                <StatusBar style='light' backgroundColor='#161622' />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp
