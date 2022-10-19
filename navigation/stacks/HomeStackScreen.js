import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ClimaScreen from '../screens/Clima/ClimaScreen'
import HomeScreen from '../screens/HomeScreen'
import Contactos from '../screens/Contacts/Contacts'
import NumeroEmergencia from '../screens/NumeroEmergencia/NumeroEmergencia'
import AccelerometerScreen from '../screens/Accelerometer/Accelerometer'
import Vibrar from '../screens/Vibrar/Vibrar'
import VideoPlayer from '../screens/VideoPlayer/VideoPlayer'

const Stack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={HomeScreen}/>
            <Stack.Screen name={'Clima'} component={ClimaScreen}/>
            <Stack.Screen name={'Contactos'} component={Contactos}/>
            <Stack.Screen name={'NumeroEmergencia'} component={NumeroEmergencia}/>
            <Stack.Screen name={'Accelerometer'} component={AccelerometerScreen}/>
            <Stack.Screen name={'Vibrar'} component={Vibrar}/>
            <Stack.Screen name={'VideoPlayer'} component={VideoPlayer}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeStackScreen