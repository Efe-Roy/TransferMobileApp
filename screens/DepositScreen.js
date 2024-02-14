import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'

export default function DepositScreen() {
    const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const onSubmit = () => {
    if (amount.trim() === '') {
        showToast1('Fill all the is required');
    } else {
      setError('');
      showToast('Form submitted successfully');
      navigation.navigate('Home')
    }
  };

  const showToast = (message) => {
    Toast.show({
      type: 'success',
      text1: 'success',
      text2: message
    });
  }

  const showToast1 = (message) => {
    Toast.show({
      type: 'error',
      text1: 'error',
      text2: message
    });
  }

  return (
    <View className="flex-1 bg-white px-8 pt-24">
        <Text className="text-center font-black text-3xl mb-10">Deposite Funds</Text>
        
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Amount</Text>
          <TextInput 
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            onChangeText={setAmount}
            value={amount}
          />
          
          {error !== '' && <Text className="text-red-500">{error}</Text>}

          <TouchableOpacity 
            onPress={onSubmit}
            style={{backgroundColor: themeColors.bg}}
            className="py-3 rounded-xl">
              <Text 
                  className="text-xl font-bold text-center text-gray-50"
              >
                      Deposite
              </Text>
            </TouchableOpacity>

            {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}

        </View>
    </View>
  )
}