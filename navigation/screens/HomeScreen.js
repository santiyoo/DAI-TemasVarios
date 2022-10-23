import { View, Text, TouchableOpacity, Button, Linking, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import React, {useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import BackgroundContext from '../../context/BackgroundContext';

const image = { uri: "https://reactjs.org/logo-og.png" };

const HomeScreen = () => {
  const navigation = useNavigation();
  const {background, setBackground} = useContext(BackgroundContext);

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

  const Accelerometer = () => {
    navigation.navigate('Accelerometer')
    console.log('Accelerometer')
  }

  const VideoPlayer = () => {
    navigation.navigate('VideoPlayer')
    console.log('VideoPlayer')
  }

  const CameraFondo = () => {
    navigation.navigate('CameraFondo')
    console.log('CameraFondo')
  }
  
  const ImagePicker = () => {
    navigation.navigate('ImagePicker')
    console.log('ImagePicker')
  }

  const QR = () => {
    navigation.navigate('Qr')
    console.log('Qr')
  }

  const handleEmailPress = async () => {
    await Linking.openURL("mailto:yoopy2705@gmail.com?subject=Asunto Predefinido&body=Probando React Native")
  }

  const handleWhatsAppPress = async () => {
    await Linking.openURL("https://wa.me/{aca iria el numero de telefono}?text=Probando React Native")
  }

  return (
    <View style={styles.container}>
      {!background ? (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <ScrollView>
            <Text style={styles.text}>Bienvenido a la App de React Native</Text>
            <TouchableOpacity style={styles.appButtonContainer} onPress={Clima}>
              <Text style={styles.appButtonText}>Clima</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={Contactos}>
              <Text style={styles.appButtonText}>Contactos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={NumeroEmergencia}>
              <Text style={styles.appButtonText}>Numero de Emergencia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={Accelerometer}>
              <Text style={styles.appButtonText}>Accelerometer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={VideoPlayer}>
              <Text style={styles.appButtonText}>Video Player</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={CameraFondo}>
              <Text style={styles.appButtonText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={ImagePicker}>
              <Text style={styles.appButtonText}>Image Picker</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={QR}>
              <Text style={styles.appButtonText}>QR</Text>
            </TouchableOpacity>
            </ScrollView>
            </ImageBackground>
          </View>
      ) : (
        <View style={styles.container}>
            <ImageBackground source={{uri: background}} resizeMode="cover" style={styles.image}>
            <ScrollView>
            <Text style={styles.text}>Bienvenido a la App de React Native</Text>
            <TouchableOpacity style={styles.appButtonContainer} onPress={Clima}>
              <Text style={styles.appButtonText}>Clima</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={Contactos}>
              <Text style={styles.appButtonText}>Contactos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={NumeroEmergencia}>
              <Text style={styles.appButtonText}>Ir A NumeroEmergencia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={Accelerometer}>
              <Text style={styles.appButtonText}>Ir A Accelerometer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={VideoPlayer}>
              <Text style={styles.appButtonText}>Ir A VideoPlayer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={CameraFondo}>
              <Text style={styles.appButtonText}>Ir A CameraFondo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={ImagePicker}>
              <Text style={styles.appButtonText}>Ir A ImagePicker</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={QR}>
              <Text style={styles.appButtonText}>QR</Text>
            </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
          </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  title:{
      fontSize: 32,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
  },
  root: {
      flex: 1,
      padding: 30,
  },  
  image: {
      flex: 1,
      justifyContent: "center",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    marginVertical: 20,
  },
});

export default HomeScreen