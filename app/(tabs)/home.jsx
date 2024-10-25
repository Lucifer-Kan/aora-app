import { FlatList, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchField from '../../components/SearchField'

const Home = () => {
    return (
        // <SafeAreaView>
        //     <Text>Teswadwdawdawdawdawdawdt</Text>
        // </SafeAreaView>
        <SafeAreaView className='bg-primary h-full'>
            <FlatList
                data={[{ id: 0 }, { id: 1 }, { id: 3 }]}

                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<Text className='text-3xl text-black'>{item.id}</Text>
                )}
                ListHeaderComponent={() => (
                    <View className='px-4 space-y-3 mt-5'>
                        <View className='flex-row items-start justify-between mb-5' >
                            <View>
                                <Text className='text-white text-sm font-pregular'>Welcome Back</Text>
                                <Text className='text-white text-xl font-psemibold'>Test User</Text></View>
                            <View className='mt-2'>
                                <Image
                                    source={images.logoSmall}
                                    resizeMethod='contain'
                                    className='w-9 h-10'
                                />
                            </View>
                        </View>
                        <SearchField placeholder={'Search for a video topic'} />
                        <View className='w-full flex-1 pt-5'>
                            <Text className='text-lg text-gray-100 font-pregular mb-3'>Latest Videos</Text>
                        </View>
                    </View>
                )}
            />


        </SafeAreaView>
    )
}

export default Home
