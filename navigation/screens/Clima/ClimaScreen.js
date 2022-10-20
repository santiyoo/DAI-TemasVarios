import React, { useEffect, useState, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Vibration, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import BackgroundContext from '../../../context/BackgroundContext';

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [clima, setClima] = useState(null)
  const {background, setBackground} = useContext(BackgroundContext);
  // const [getLocation, setGetLocation] = useState(false);

  const getLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        alert('Ubicacion no autorizada')
        Vibration.vibrate(3 * 1000)
        return;
      }

      console.log(status);

      let {coords} = await Location.getCurrentPositionAsync();

      setLocation(coords);

      console.log(coords);

      if (coords) {
        let { longitude, latitude } = coords;

        let regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        setAddress(regionName[0]);
        console.log(regionName, 'nothing');
      }

      console.log(coords);
    })();
  };

  const traerClima = async () => {
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=4a5e740c6f08a4f54f1c87f1fe6b7bd3&units=metric`)
        if(response.data){ 
          setClima(response.data);
          console.log('traerClima', response.data)
        }
    }
    catch(error){
        console.log(error.message)
    }
  };

  useEffect(() => {
    if(location && address){
      traerClima();
    }
    // console.log('Location: ', location.latitude);
  }, [location, address]);

  return (
    <View style={styles.container}>
    {!background ? (
      <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <ScrollView>
              <View style={styles.container2}>
                <Text style={styles.text}>
                {!clima ? 'Waiting...' : `\n Clima: ${clima.main.temp} \n Ciudad: ${address.city}`}
                </Text>
                <TouchableOpacity onPress={getLocation}>
                  <View
                    style={{
                      height: 100,
                      backgroundColor: 'teal',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                      marginTop: 20,
                    }}>
                    <Text style={styles.btnText}> GET LOCATION </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
    ) : (
      <View style={styles.container}>
          <ImageBackground source={{uri:background}} resizeMode="cover" style={styles.image}>
            <ScrollView>
              <View style={styles.container2}>
                <Text style={styles.big}>
                {!clima ? 'Waiting...' : `\n Clima: ${clima.main.temp} \n Ciudad: ${address.city}`}
                </Text>
                <TouchableOpacity onPress={getLocation}>
                  <View
                    style={{
                      height: 100,
                      backgroundColor: 'teal',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                      marginTop: 20,
                    }}>
                    <Text style={styles.btnText}> GET LOCATION </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
    )}
  </View>
  );

}

const styles = StyleSheet.create({
  big: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
  container: {
      flex: 1,
  },
  container2:{
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',

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