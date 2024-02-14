import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import profile from "../assets/images/login.png";
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

import {
  Settings,
  HelpCircle,
  Send,
  ArrowDownLeft,
  List,
  Heart,
  User,
} from "react-native-feather";

export default function HomeScreen() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView>
      <View className="px-5 py-10 bg-white">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <Image className="h-16 w-16" source={profile} />
            <Text className="font-bold ml-4">John Doe</Text>
          </View>
          <View className="flex flex-row items-center">
            <Text>USD</Text>
          </View>
        </View>

        <View className="flex mt-20 justify-center items-center shadow-2xl px-2 py-10 rounded-2xl bg-gray-100" style={{backgroundColor: themeColors.bg}}>
          <Text className="text-3xl font-bold ml-2 text-white">BALANCE</Text>
          <Text className="text-3xl ml-2 text-white">$50.32</Text>
        </View>

        <View className="flex flex-row flex-wrap content-center items-center gap-2 overflow-hidden py-20">
          <View onPress={()=> navigation.navigate('Transfer')} className="flex flex-1 p-5 basis-[32] justify-center bg-gray-100 items-center rounded-2xl" style={{backgroundColor: themeColors.bg}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Transfer')}>
              <Send width={58} height={58} className="text-white" />
            </TouchableOpacity>
            <Text className="text-22 font-bold text-white mt-5">
              Transfer
            </Text>
          </View>
          <View className="flex flex-1 p-5 basis-[32] justify-center bg-gray-100 items-center rounded-2xl" style={{backgroundColor: themeColors.bg}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Deposite')}>
              <ArrowDownLeft width={58} height={58} className="text-white" />
            </TouchableOpacity>
            <Text className="text-22 font-bold text-white mt-5">
              Deposite
            </Text>
          </View>
          <View className="flex flex-1 p-5 basis-[32] justify-center bg-gray-100 items-center rounded-2xl" style={{backgroundColor: themeColors.bg}}>
            <TouchableOpacity onPress={()=> navigation.navigate('History')}>
              <List width={58} height={58} className="text-white" />
            </TouchableOpacity>
            <Text className="text-22 font-bold text-white mt-5">
              Transaction History
            </Text>
          </View>
          <View className="flex flex-1 p-5 basis-[32] justify-center bg-gray-100 items-center rounded-2xl" style={{backgroundColor: themeColors.bg}}>
            <Heart width={58} height={58} className="text-white" />
            <Text className="text-22 font-bold text-white mt-5">
              Help Center
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}