import { View, Text, TouchableOpacity, Button, Linking } from 'react-native'
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

  const handleEmailPress = async () => {
    await Linking.openURL("mailto:yoopy2705@gmail.com?subject=Asunto Predefinido&body=Probando React Native")
  }

  const handleWhatsAppPress = async () => {
    await Linking.openURL("https://wa.me/{aca iria el numero de telefono}?text=Probando React Native")
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
      <Button title='Email' onPress={handleEmailPress}/>
      <Button title='WhatsApp' onPress={handleWhatsAppPress}/>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen