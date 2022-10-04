// import { View, Text, ActivityIndicator, StyleSheet, TextInput, Button } from 'react-native'
// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import GetLocation from 'expo-location'

// const ClimaScreen = () => {
//   const [clima, setClima] = useState({})
//   const [location, setLocation] = useState('')

//   const traerClima = async (location) => {

//     try{
//         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4a5e740c6f08a4f54f1c87f1fe6b7bd3&units=metric`)
//         if(response.data){ 
//           setClima(response.data);
//           console.log('traerClima', response.data)
//         }
//     }
//     catch(error){
//         console.log(error.message)
//     }
//   };

//   const [ error, setError ] = useState(false);

//   const handleInput = (e) => {
//     const { city, country } = e.target.elements;
//     const cityValue = city.value;
//     const countryValue = country.value;
//   };

//   function buscar(e){
//     e.preventDefault()

//     if(location){
//       traerClima()
//       setError(false)
//     }else{
//       setError(true)
//     }
//   }

//   GetLocation.getCurrentPosition({
//     enableHighAccuracy: true,
//     timeout: 15000,
//   })
//   .then(location => {
//       console.log('GetLocation: ', location);
//   })
//   .catch(error => {
//       const { code, message } = error;
//       console.log(code, message);
//   })

//   return(
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {console.log('en el return', clima)}
//       {console.log('Location: ', location)}
//       <Text style={{fontWeight: 'bold', fontSize: 20}}>Ingrese Localización</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={newText => setLocation(newText)}
//         defaultValue={location}
//         placeholder='Ingrese Localizacion'
//       />
//       <Button
//         title="Press me"
//         onPress={newText=>setLocation(newText)}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     width: 300
//   },
// })
// export default ClimaScreen

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import * as Location from 'expo-location';

// You can import from local files

let apiKey = 'YOUR_API_KEY';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [clima, setClima] = useState(null)
  // const [getLocation, setGetLocation] = useState(false);

  const getLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      console.log('Coords', location);

      if (coords) {
        let { longitude, latitude } = coords;

        let regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        setAddress(regionName[0]);
        console.log(regionName, 'nothing');
      }
    })();
  };

  const traerClima = async () => {
    try{
        // console.log('traerClima', location.latitude, location.longitude)
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
    if(location){
      traerClima();
    }
    // console.log('Location: ', location.latitude);
  }, [location]);

  return (
    <View style={styles.container}>
      <Text style={styles.big}>
        {!location
          ? 'Waiting'
          : `Lat: ${location.latitude} \nLong: ${
              location.longitude
            } \n${JSON.stringify(address?.['subregion'])}`}
      {!clima ? '' : `\n Clima: ${clima.main.temp}`}
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