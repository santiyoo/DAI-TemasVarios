import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [clima, setClima] = useState(null)
  // const [getLocation, setGetLocation] = useState(false);

  const getLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

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
      <Text style={styles.big}>
        {/* {!location
          ? 'Waiting'
          : `Lat: ${location.latitude} \nLong: ${
              location.longitude
            }`} */}
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
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});