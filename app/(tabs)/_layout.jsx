import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabsLayout = () => {

    const TabIcons = ({ focused, icon, title, color }) => {
        return (
            <View className="items-center justify-center">
                <Image source={icon}
                    resizeMode="contain"
                    tintColor={color}
                    className="h-6 w-6"
                />
                <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{ color: color }}>{title}</Text>
            </View>
        )
    }

    return (
        <>
            <Tabs screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: { backgroundColor: '#161622', borderTopWidth: 1, height: 85, borderTopColor: "#232533", },


            }}>
                <Tabs.Screen name='home' options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcons focused={focused}
                            icon={icons.home}
                            title='Home'
                            color={color}
                        />
                    )
                }} />
                <Tabs.Screen name='bookmark' options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcons focused={focused}
                            icon={icons.bookmark}
                            title='Bookmark'
                            color={color}
                        />
                    )
                }} />
                <Tabs.Screen name='profile' options={{
                    title: 'profile',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcons focused={focused}
                            icon={icons.profile}
                            title='Profile'
                            color={color}
                        />
                    )
                }} />
                <Tabs.Screen name='create' options={{
                    title: 'create',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <TabIcons focused={focused}
                            icon={icons.profile}
                            title='Create'
                            color={color}
                        />
                    )
                }} />

            </Tabs>
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})