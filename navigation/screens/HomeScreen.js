import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const Clima = () => {
    navigation.navigate('Clima')
    console.log('Clima')
  }

  return (
    <View>
      <TouchableOpacity onPress={Clima}>
        <Text>Ir A Clima</Text>
      </TouchableOpacity>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen