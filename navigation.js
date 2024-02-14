import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import TransferScreen from './screens/TransferScreen';
import DepositScreen from './screens/DepositScreen';
import TransactionHistory from './screens/TransactionHistory';

const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="History" options={{headerShown: false}} component={TransactionHistory} />
        <Stack.Screen name="Deposite" options={{headerShown: false}} component={DepositScreen} />
        <Stack.Screen name="Transfer" options={{headerShown: false}} component={TransferScreen} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
      </Stack.Navigator>

      <Toast />
    </NavigationContainer>
  )
}