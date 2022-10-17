import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const Clima = () => {
    navigation.navigate('Clima')
    console.log('Clima')
  }

  const Contactos = () => {
    navigation.navigate('Contactos')
    console.log('Contactos')
  }

  const NumeroEmergencia = () => {
    navigation.navigate('NumeroEmergencia')
    console.log('NumeroEmergencia')
  }

  return (
    <View>
      <TouchableOpacity onPress={Clima}>
        <Text>Ir A Clima</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Contactos}>
        <Text>Ir A Contactos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={NumeroEmergencia}>
        <Text>Ir A NumeroEmergencia</Text>
      </TouchableOpacity>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen