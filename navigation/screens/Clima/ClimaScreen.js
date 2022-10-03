import { View, Text, ActivityIndicator, StyleSheet, TextInput, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ClimaScreen = () => {
  const [clima, setClima] = useState({})
  const [location, setLocation] = useState('')

  const traerClima = async (location) => {

    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4a5e740c6f08a4f54f1c87f1fe6b7bd3&units=metric`)
        if(response.data){ 
          setClima(response.data);
          console.log('traerClima', response.data)
        }
    }
    catch(error){
        console.log(error.message)
    }
  };

  const [ error, setError ] = useState(false);

  const handleInput = (e) => {
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
  };

  function buscar(e){
    e.preventDefault()

    if(location){
      traerClima()
      setError(false)
    }else{
      setError(true)
    }
  }

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {console.log('en el return', clima)}
      {console.log('Location: ', location)}
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Ingrese Localización</Text>
      <TextInput
        style={styles.input}
        onChangeText={newText => setLocation(newText)}
        defaultValue={location}
        placeholder='Ingrese Localizacion'
      />
      <Button
        title="Press me"
        onPress={newText=>setLocation(newText)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300
  },
})
export default ClimaScreen