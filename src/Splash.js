import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(get_email, 2000)
  }, [])

  const get_email = async () => {
    let email = await AsyncStorage.getItem('email')
    if(email) {
      navigation.replace('Home', {email})
    } else {
      navigation.replace("Login")
    }
  }

  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash